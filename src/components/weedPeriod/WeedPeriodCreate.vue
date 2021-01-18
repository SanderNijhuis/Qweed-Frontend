<template>
  <div>
    <h1 style="margin-left: -25px;">Create</h1>

    <h4 style="margin-left: -25px;">Weed period</h4>
    <hr />
    <div class="row d-flex justify-content-center align-items-center container">
      <div class="col-md-4">
        <b-form @submit="validateAndSubmit">
          <div v-if="errors.length">
            <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
          </div>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control"  for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
          </fieldset>
          <fieldset class="form-group">
            <label class=""  for="checkbox">Initial</label>
            <input type="checkbox" id="checkbox" v-model="isInitial">
            <label for="checkbox">{{ isInitial }}</label>
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control"  for="startDate">Start date</label>
            <input type="date" class="form-control" id="startDate" v-model="startDate">
          </fieldset>
          <fieldset v-if="isInitial" class="form-group">
            <label class="b-form-btn-label-control"  for="endDate">End date</label>
            <input type="date" class="form-control" id="endDate" v-model="endDate">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control"  for="averageGramPerJoint">Average gram per joint</label>
            <!--<input type="number" class="form-control" id="averageGramPerJoint" v-model.number="averageGramPerJoint"> -->
            <vue-numeric-input id="averageGramPerJoint" v-model="averageGramPerJoint" :min="0.1" :max="20" :step="0.1" size="100%" :precision="1" align="center" placeholder="0.1"></vue-numeric-input>
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control"  for="costPerGram">Cost per gram</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric-input id="costPerGram" v-model.number="costPerGram" :min="1" :max="50" :step="0.5" size="100%" :precision="2" align="center" placeholder="1"></vue-numeric-input>
          </fieldset>
          <fieldset v-if="isInitial" class="form-group">
            <label class="b-form-btn-label-control"  for="averageJointsSmokedPerWeek">Average joints smoked per week</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric-input id="averageJointsSmokedPerWeek" v-model.number="averageJointsSmokedPerWeek" :min="1" :max="500" :step="1" size="100%" :precision="0" align="center" placeholder="1"></vue-numeric-input>
          </fieldset>
          <fieldset v-if="isInitial" class="form-group">
            <label class="b-form-btn-label-control"  for="averageDurationPerWeek">Average duration per week</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric-input  id="averageDurationPerWeek" v-model.number="averageDurationPerWeek" :min="1" :max="6000" :step="1" size="65%" :precision="0" align="center" placeholder="1"></vue-numeric-input><span>minutes</span>
          </fieldset>
          <div class="form-group">
            <button v-on:click="accept" class="btn btn-primary" type="submit">Add </button>
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
      name: "NotInitial Weedperiod",
      startDate: new Date(),
      endDate: new  Date,
      averageGramPerJoint: 0.6,
      costPerGram: 10.6,
      averageJointsSmokedPerWeek: null,
      averageDurationPerWeek: null,
      isInitial: false,
      customerName: null,
      errors: [],
      accepted: false
    };
  },
  methods: {
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if(!this.name){
        this.errors.push("name required")
      }
      if(!this.startDate ){
        this.errors.push("start date required")
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
#checkbox{
  margin: 5px;

}
#averageDurationPerWeek{
  margin-right: 5px;
}
</style>