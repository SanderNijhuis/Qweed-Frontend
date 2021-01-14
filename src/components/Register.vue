<template>
  <div>
    <div class="d-flex justify-content-center align-items-center container p-3" >
      <b-form class="card p-3 bg-light col-md-5" @submit="validateAndSubmit">
        <h3>Registreren</h3>
        <div v-if="errors.length">
          <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div>
        <fieldset class="form-group">
          <label for="username">Gebruikersnaam</label>
          <input type="text" class="form-control" id="username" v-model="username">
        </fieldset>
        <fieldset class="form-group">
          <label for="password" >Wachtwoord</label>
          <input type="password" class="form-control" id="password" v-model="password">
        </fieldset>
        <fieldset class="form-group">
          <label for="motivation">Motivatie</label>
          <input type="text" class="form-control" id="motivation" v-model="motivation">
        </fieldset>
        <button v-on:click="accept" class="btn btn-primary" type="submit">Registreren</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";


export default {
    name: "Register",
    data() {
      //const date = new Date();
        return {
            username: "",
            password: "",
            motivation: "",
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
            this.errors.push("Gebruikersnaam is vereist")
          }
          if(!this.password){
            this.password.push("wachtwoordd is vereist")
          }
          if (this.accepted) {
            if (this.errors.length === 0) {
              //TODO check if there isn't already the same account
              UserDataService.createUser(this.username, {
                username: this.username,
                password: this.password,
                motivation: this.motivation
              }).then(() => {
                this.$router.push('/login');
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
