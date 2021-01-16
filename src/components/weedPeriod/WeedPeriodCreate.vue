<template>
  <div>
    <h1>Create</h1>

    <h4>Wiet periode</h4>
    <hr />
    <div class="row">
      <div class="col-md-4">
        <b-form @submit="validateAndSubmit">
          <div v-if="errors.length">
            <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
          </div>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control"  for="name">Gebruikersnaam</label>
            <input type="text" class="form-control" id="name" v-model="name">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control"  for="startDate">Start datum</label>
            <input type="date" class="form-control" id="startDate" v-model="startDate">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control"  for="averageGramPerJoint">Gemiddelde hoeveelheid gram per joint</label>
            <input type="text" class="form-control" id="averageGramPerJoint" v-model.number="averageGramPerJoint">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control"  for="costPerGram">Kosten per gram in euro's</label>
            <input type="text" class="form-control" id="costPerGram" v-model.number="costPerGram">
          </fieldset>
          <div class="form-group">
            <button v-on:click="accept" class="btn btn-primary" type="submit">Toevoegen </button>
          </div>
        </b-form>
      </div>
    </div>

  </div>
</template>

<script>
//import UserDataService from "@/services/UserDataService";
//import LocalStorageService from "@/services/LocalStorageService";

export default {
  name: "WeedPeriodCreate",
  data() {
    return {
      name: "",
      startDate: new Date(),
      averageGramPerJoint: 0,
      costPerGram: 0,
      errors: [],
      accepted: false
    };
  },
  methods: {
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if(!this.name){
        this.errors.push("Naam vereist")
      }
      if(!this.startDate ){
        this.errors.push("start datum vereist")
      }
      if (this.accepted) {
        if (this.errors.length === 0) {
          /*WeedPeriodDataService.Create().then(response => {
            // eslint-disable-next-line no-console
            //console.warn(response);
            //console.log("user: " + response.data)
            const user = response.data;
            LocalStorageService.setUser(user.id)
            this.$router.push('/user');
          }).catch(err => {
            if(err.response.status===400){
              this.error.push("incorrecte gebruikersnaam of wachtwoord")
            }
            if(err.response.status===500){
              this.errors.push("Er is een probleem opgetreden")
            }

            // eslint-disable-next-line no-console
            console.log(err);
            //eslint-disable-next-line no-console
            console.log("found an error");
          });*/

        }
      }
    },
    accept() {
      this.accepted = true;
    },
  },
}
</script>

<style scoped>

</style>