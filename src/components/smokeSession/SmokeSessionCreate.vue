<template>
  <div>
    <h1 style="margin-left: -25px;">Create</h1>

    <h4 style="margin-left: -25px;">Smoke session</h4>
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
            <label class="b-form-btn-label-control col-md-12"  for="startDate">Date</label>
            <input type="date" class="form-control" id="startDate" v-model="startDate">
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="jointsSmoked">Joints smoked</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric id="jointsSmoked" v-model="jointsSmoked" separator="."></vue-numeric>
          </fieldset>
          <fieldset class="form-group">
            <label class="b-form-btn-label-control col-md-12" for="duration">Duration(in minutes)</label>
            <!-- <input type="number" class="form-control" id="costPerGram" v-model.number="costPerGram"> -->
            <vue-numeric id="duration" v-model="duration" separator="."></vue-numeric>
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
import SmokesessionDataService from "@/services/SmokesessionDataService";
import LocalStorageService from "@/services/LocalStorageService";
//import WeedperiodDataService from "@/services/WeedperiodDataService";

export default {
  name: "SmokeSessionCreate",
  data() {
    return {
      weedperiodID:null,
      name: "",
      startDate: null,
      jointsSmoked: 0,
      duration: 0,
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
      if(!this.jointsSmoked ){
        this.errors.push("Joints smoked required")
      }
      if(!this.duration ){
        this.errors.push("Duration required")
      }
      if (this.accepted) {
        this.weedperiodID = this.$route.params.id
        if (this.errors.length === 0) {
          this.weedperiodID =
          SmokesessionDataService.createSmokesession(LocalStorageService.getUser(), {
            name: this.name,
            startDate: this.startDate,
            jointsSmoked: this.jointsSmoked,
            duration: this.duration,
            weedperiodID: this.weedperiodID
          }).then(() => {
              this.$router.push(`/WeedPeriod/${this.$route.params.id}`)
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