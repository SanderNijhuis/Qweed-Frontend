<template>
  <div>
    <div class="d-flex justify-content-center align-items-center container p-3" >
      <b-form class="card p-3 bg-light col-md-5" @submit="validateAndSubmit">
        <h3>Register</h3>
        <div v-if="errors.length">
          <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div>
        <fieldset class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" v-model="username">
        </fieldset>
        <fieldset class="form-group">
          <label for="password" >Password</label>
          <input type="password" class="form-control" id="password" v-model="password">
        </fieldset>
        <fieldset class="form-group">
          <label for="motivation">Motivation</label>
          <input type="text" class="form-control" id="motivation" v-model="motivation">
        </fieldset>
        <button v-on:click="accept" class="btn btn-primary" type="submit">Register</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import UserDataService from "../../services/UserDataService";
import md5 from 'js-md5';

export default {
    name: "Register",
    data() {
      //const date = new Date();
        return {
            username: "",
            password: "",
            motivation: " ",
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
              //TODO check if there isn't already the same account
              console.log("md5:" + md5(this.password) )
              UserDataService.createUser(this.username, md5(this.password), this.motivation).then(() => {
                this.$router.push('/login');
              }).catch(err => {
                if(err.response.status===400){
                  this.errors.push("Username is already in use")
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
        accept() {
          this.accepted = true;
        },

    },
    created() {

    }
};
</script>
