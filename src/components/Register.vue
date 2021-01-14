<template>
<div>

    <div class="container">
        <form class="mx-auto" style="width: 400px" @submit="validateAndSubmit">
          <h3>Register</h3>
            <div v-if="errors.length">
                <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
            </div>
            <fieldset class="form-group">
                <label>Gebruikersnaam</label>
                <input type="text" class="form-control" v-model="username">
            </fieldset>
            <fieldset class="form-group">
              <label>Wachtwoord</label>
              <input type="password" class="form-control" v-model="password">
            </fieldset>
            <fieldset class="form-group">
              <label>Gebruikersnaam</label>
              <input type="text" class="form-control" v-model="username">
            </fieldset>
            <button v-on:click="accept" class="btn btn-success mt-3" type="submit">Registreren</button>
        </form>
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
