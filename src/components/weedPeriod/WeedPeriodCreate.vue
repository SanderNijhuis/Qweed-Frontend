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
            <label class="b-form-btn-label-control col-md-12"  for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
          </fieldset>
          <fieldset class="form-group">
            <label class=""  for="checkbox">Initial</label>
            <input type="checkbox" id="checkbox" v-model="isInitial">
            <label for="checkbox">{{ isInitial }}</label>
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12"  for="startDate">Start date</label>
            <input type="date" class="form-control" id="startDate" v-model="startDate">
          </fieldset>
          <fieldset v-if="isInitial" class="form-group">
            <label class="b-form-btn-label-control col-md-12"  for="endDate">End date</label>
            <input type="date" class="form-control" id="endDate" v-model="endDate">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12"  for="averageGramPerJoint">Average gram per joint</label>
            <!--<input type="number" class="form-control" id="averageGramPerJoint" v-model.number="averageGramPerJoint"> -->
            <vue-numeric id="averageGramPerJoint" v-model="averageGramPerJoint" v-bind:precision="2" separator="."></vue-numeric>
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12"  for="costPerGram">Cost per gram</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric id="costPerGram" v-model="costPerGram" currency="€" v-bind:precision="2" separator="."></vue-numeric>
          </fieldset>
          <fieldset v-if="isInitial" class="form-group">
            <label class="b-form-btn-label-control col-md-12"  for="averageJointsSmokedPerWeek">Average joints smoked per week</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric id="averageJointsSmokedPerWeek" v-model="averageJointsSmokedPerWeek" separator="."></vue-numeric>
          </fieldset>
          <fieldset v-if="isInitial" class="form-group">
            <label class="b-form-btn-label-control col-md-12"  for="averageDurationPerWeek">Average time(in minutes) spend smoking per week</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric id="averageDurationPerWeek" v-model="averageDurationPerWeek" separator="."></vue-numeric>
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
import WeedperiodDataService from "@/services/WeedperiodDataService";
import LocalStorageService from "@/services/LocalStorageService";
//import WeedperiodDataService from "@/services/WeedperiodDataService";

export default {
  name: "WeedPeriodCreate",
  data() {
    return {
      name: "NotInitial Weedperiod",
      startDate: new Date(),
      endDate: new  Date,
      averageGramPerJoint: 0.6,
      costPerGram: 10.6,
      averageJointsSmokedPerWeek: 1,
      averageDurationPerWeek: 1,
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
          WeedperiodDataService.createWeedperiod(LocalStorageService.getUser(), {
            name: this.name,
            startDate: this.startDate,
            endDate: this.endDate,
            averageGramPerJoint: this.averageGramPerJoint,
            costPerGram: this.costPerGram,
            averageJointsSmokedPerWeek: this.averageJointsSmokedPerWeek,
            averageDurationPerWeek: this.averageDurationPerWeek,
            isInitial: this.isInitial,
            customerName: LocalStorageService.getUsername()
          }).then(() => {
                this.$router.push('/user');
          }).catch(err => {
            if(err.response.status===400){
              this.error.push("TODO")
            }
            if(err.response.status===500){
              this.errors.push("An error has occurred")
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