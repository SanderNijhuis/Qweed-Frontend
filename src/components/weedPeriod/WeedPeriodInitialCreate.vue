<template>
  <div>
    <h1 style="margin-left: -25px;">Create</h1>

    <h4 style="margin-left: -25px;">Weed period initial</h4>
    <hr/>
    <div class="row d-flex justify-content-center align-items-center container">
      <div class="col-md-4">
        <b-form @submit="validateAndSubmit">
          <div v-if="errors.length">
            <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{ error }}</div>
          </div>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="name">Name*</label>
            <input type="text" class="form-control" id="name" v-model="name">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="startDate">Start date*</label>
            <input type="date" class="form-control" id="startDate" v-model="startDate">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="endDate">End date*</label>
            <input type="date" class="form-control" id="endDate" v-model="endDate">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="averageGramPerJoint">Average gram per joint*</label>
            <!--<input type="number" class="form-control" id="averageGramPerJoint" v-model.number="averageGramPerJoint"> -->
            <vue-numeric id="averageGramPerJoint" v-model="averageGramPerJoint" v-bind:precision="2"
                         separator="."></vue-numeric>
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="costPerGram">Cost per gram*</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric id="costPerGram" v-model="costPerGram" currency="€" v-bind:precision="2"
                         separator="."></vue-numeric>
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="averageJointsSmokedPerWeek">Average joints smoked per
              week*</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric id="averageJointsSmokedPerWeek" v-model="averageJointsSmokedPerWeek"
                         separator="."></vue-numeric>
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="averageDurationPerWeek">Average time(in minutes)
              spend smoking per week*</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric id="averageDurationPerWeek" v-model="averageDurationPerWeek" separator="."></vue-numeric>
          </fieldset>
          <div class="form-group">
            <button v-on:click="accept" class="btn btn-primary" type="submit">Add</button>
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
      name: "",
      startDate: null,
      endDate: null,
      averageGramPerJoint: 0,
      costPerGram: 0,
      averageJointsSmokedPerWeek: 0,
      averageDurationPerWeek: 0,
      isInitial: true,
      customerName: null,
      errors: [],
      accepted: false,
      weedperiod: {}
    };
  },
  methods: {
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name required")
      }
      if (!this.startDate) {
        this.errors.push("Start date required")
      }
      if (!this.endDate) {
        this.errors.push("End date required")
      }
      if (!this.averageGramPerJoint) {
        this.errors.push("Average gram per joint required")
      }
      if (!this.costPerGram) {
        this.errors.push("Cost per gram required")
      }
      if (!this.averageJointsSmokedPerWeek) {
        this.errors.push("Average joint smoke per week required")
      }
      if (!this.averageDurationPerWeek) {
        this.errors.push("Average time(in minutes) spend smoking per week required")
      }
      if( Date.parse(this.startDate) > Date.parse(new Date())){
        this.errors.push("Start date can't be in the future")
      }
      if( Date.parse(this.endDate) > Date.parse(new Date())){
        this.errors.push("End date can't be in the future")
      }
      if( Date.parse(this.endDate) < Date.parse(this.startDate)){
        this.errors.push("Start date can't be later than your end date")
      }

      if (this.accepted) {
        if (this.errors.length === 0) {
          this.weedperiod = {
            name: this.name,
            startDate: this.startDate,
            endDate: this.endDate,
            averageGramPerJoint: this.averageGramPerJoint,
            costPerGram: this.costPerGram,
            averageJointsSmokedPerWeek: this.averageJointsSmokedPerWeek,
            averageDurationPerWeek: this.averageDurationPerWeek,
            isInitial: this.isInitial,
            customerName: LocalStorageService.getUsername()
          }
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
            if (err.response.status === 400) {
              this.errors.push("You can only have one initial period")
            }
            if (err.response.status === 500) {
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
#checkbox {
  margin: 5px;

}

#averageDurationPerWeek {
  margin-right: 5px;
}
</style>
