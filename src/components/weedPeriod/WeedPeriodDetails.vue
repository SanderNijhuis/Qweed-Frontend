<template>
  <div>
    <div id="UserPage" >
      <h4> Wietrook periode: </h4>

      <div v-if="errors.length">
        <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
      </div>
      <!-- <div class="d-flex w-75 justify-content-between">
        <label class="b-form-btn-label-control" >Naam: </label>
        <span id="name" v-if="WeedPeriod.name">{{WeedPeriod.name}}</span>
        <div v-else>Naam kan momenteel niet worden opgehaald.</div>
      </div>

      <div class="d-flex w-75 justify-content-between">
        <label class="b-form-btn-label-control"  >Start datum: </label>
        <span id="startDate" v-if="WeedPeriod.startDate">{{WeedPeriod.startDate | moment('LL')}}</span>
        <span v-else>Start datum kan momenteel niet worden opgehaald.</span>
      </div>

      <div class="d-flex w-75 justify-content-between">
        <label class="b-form-btn-label-control"  >Eind datum: </label>
        <span id="endDate" v-if="WeedPeriod.endDate">{{WeedPeriod.endDate | moment('LL')}}</span>
        <span v-else>Start datum kan momenteel niet worden opgehaald.</span>
      </div>

      <div class="d-flex w-75 justify-content-between">
        <label class="b-form-btn-label-control"  for="averageGramPerJoint"> Gemiddeld aantal gram per joint:</label>
        <span id="averageGramPerJoint" v-if="WeedPeriod.averageGramPerJoint">{{WeedPeriod.averageGramPerJoint}} gram</span>
        <span v-else>Gemiddeld aantal gram per joint kan momenteel niet worden opgehaald.</span>
      </div>

      <div class="d-flex w-75 justify-content-between">
        <label class="b-form-btn-label-control"  for="costPerGram"> Kosten per gram:</label>
        <span id="costPerGram" v-if="WeedPeriod.costPerGram">{{WeedPeriod.costPerGram}} euro</span>
        <span v-else>Kosten per gram kan momenteel niet worden opgehaald.</span>
      </div>

      <div class="d-flex w-75 justify-content-between">
        <label class="b-form-btn-label-control"  for="averageJointsSmoked"> Gemiddeld aantal joints per week:</label>
        <span id="averageJointsSmoked" v-if="WeedPeriod.averageJointsSmoked">{{WeedPeriod.averageJointsSmoked}} joints </span>
        <span v-else>Gemiddeld aantal joints per week kan momenteel niet worden opgehaald.</span>
      </div>

      <div class="d-flex w-75 justify-content-between">
        <label class="b-form-btn-label-control"  for="averageDuration">Gemiddelde tijd per week:</label>
        <span id="averageDuration" v-if="WeedPeriod.averageDuration">{{WeedPeriod.averageDuration}} minuten</span>
        <span v-else>Gemiddelde tijd per week kan momenteel niet worden opgehaald.</span>
      </div> -->
    </div>
    <hr/>

    <div class="list-group-item  flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{WeedPeriod.name}}</h5>
        <small>{{WeedPeriod.startDate| moment('LL')}}</small>
        <small>{{WeedPeriod.endDate| moment('LL')}}</small>
      </div>
      <hr />
      <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Gemiddelde hoeveelheid joints per week:</span> <span>{{WeedPeriod.averageJointsSmoked}} joints </span> </h6>
      <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Gemiddelde kosten per week:</span><span>{{WeedPeriod.averageCostPerWeek}} euro </span> </h6>
      <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Gemiddelde hoeveelheid tijd per week:</span><span>{{WeedPeriod.averageDuration}} minuten </span> </h6>
      <div class="d-flex w-100 justify-content-between">
        <span></span>
        <button v-on:click="deleteWeedPeriod" class="btn btn-danger" type="submit">Delete </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeedPeriodDetails",
  data(){
    return{
      WeedPeriod: {
        name:"basic weed periode",
        startDate: new Date(),
        endDate: new Date(),
        averageGramPerJoint: 0.5,
        costPerGram: 10,
        averageJointsSmoked: 10,
        averageDuration: 120,
        averageCostPerWeek:0 ,
      },
      errors: [],
    }
  },
  beforeCreate() {
    this.averageCostPerWeek = (this.averageJointsSmoked * this.averageGramPerJoint) * this.costPerGram
  },
  methods: {
    deleteWeedPeriod() {
      //TODO delete
    },

  }
}

</script>

<style scoped>
#UserPage{
  text-align: left;
}
label{
  margin-right: 5px;
}
small{
  margin-top: 5px;
}
h6{
  text-align: left;
  margin-left:12%;
}
</style>