<template>
<div>
  <div class="d-flex justify-content-center align-items-center container p-3" >
    <b-form class="card p-3 bg-light col-md-5" @submit="validateAndSubmit">
      <h3>Login</h3>
      <div v-if="errors.length">
        <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
      </div>
      <fieldset class="form-group">
        <label class="b-form-btn-label-control"  for="username">Username</label>
        <input type="text" class="form-control" id="username" v-model="username">
      </fieldset>
      <fieldset class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </fieldset>
      <button v-on:click="accept" class="btn btn-primary" type="submit">Login</button>
      <button v-on:click="register" class="btn btn-primary" type="submit">Register</button>
    </b-form>
  </div>
</div>
</template>

<script>
import UserDataService from "../../services/UserDataService";
import LocalStorageService from "../../services/LocalStorageService";
import md5 from 'js-md5';

export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
            errors: [],
            accepted: false
        };
    },
    computed: {
    },
    methods: {
        validateAndSubmit(e) {
          e.preventDefault();
          this.errors = [];
          if(!this.username){
            this.errors.push("Username is required")
          }
          if(!this.password){
            this.errors.push("Password is required")
          }
          if (this.accepted) {
            if (this.errors.length === 0) {
                  UserDataService.login(this.username,md5(this.password)).then(response => {
                    // eslint-disable-next-line no-console
                    console.warn(response);
                    console.log("user: " + response.data)
                    const token = response.data;
                    LocalStorageService.setUser(token)
                    LocalStorageService.setUsername(this.username)
                    this.$router.push('/user');
                }).catch(err => {
                  if(err.response.status===400){
                    this.errors.push("incorrect username or password")
                  }
                  if(err.response.status===500){
                    this.errors.push("The application experienced a problem")
                  }
                
                // eslint-disable-next-line no-console
                console.log(err);
                //eslint-disable-next-line no-console
                console.log("found an error");
                });
             
            }
          }
        },
        register(){
          this.$router.push('/register')
        },
        accept() {
          this.accepted = true;
        },

    },
    created() {

    }
};
</script>
<style lang="css">
button{
  margin: 5px;
}
</style>