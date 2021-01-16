<template>
  <div>
    <div id="UserPage" >
      <h4> Wietrook periode</h4>

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
        <small>Gram per joint: {{WeedPeriod.averageGramPerJoint}} gram</small> <small>Kosten per gram: €{{WeedPeriod.costPerGram}} </small><small>Kosten per joint: €{{WeedPeriod.costPerGram * WeedPeriod.averageGramPerJoint}} </small>
        <small>{{ WeedPeriod.startDate| moment('LL') }}</small>
      </div>
      <hr />
      <div v-if="WeedPeriod.isInitial">
        <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Gemiddelde joints per week:</span> <span>{{WeedPeriod.averageJointsSmoked}} joints </span> </h6>
        <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Gemiddelde kosten per week:</span><span>€ {{WeedPeriod.averageCostPerWeek}} </span> </h6>
        <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Gemiddelde tijd per week:</span><span>{{WeedPeriod.averageDuration}} minuten </span> </h6>
      </div>
      <div v-else>
        <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Totale joints:</span> <span>{{WeedPeriod.totalJoints}} joints </span> </h6>
        <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Totale kosten:</span><span>{{WeedPeriod.totalCosts}} euro </span> </h6>
        <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Totale tijd:</span><span>{{WeedPeriod.totalTime}} minuten </span> </h6>
      </div>
      <hr />
      <div class="d-flex w-100 justify-content-between">
        <h6 v-if="WeedPeriod.isInitial && WeedPeriod.smokeSessions" class="mb-1"></h6>
        <h6 v-else class="mb-1">Number of smoke sessions: {{WeedPeriod.smokeSessions.length}}</h6>
        <small>{{ WeedPeriod.endDate | moment('LL') }}</small>
      </div>
    </div>
    <br />
    <div>
      <div class="d-flex w-100 justify-content-between">
        <a v-on:click="overview" class="" type="submit">Terug naar overzicht</a>
        <button v-on:click="deleteWeedPeriod" class="btn btn-danger" type="submit">Verwijderen</button>
      </div>
    </div>

    <br />
    <div class="d-flex w-100 justify-content-between">
      <h4>Wietrook sessies</h4>
    </div>
    <button v-on:click="addSmokeSession(WeedPeriod.id)" class="btn btn-success" type="submit">Wietrook sessie toevoegen</button>
    <hr />
    <div class="container">
      <div class="list-group">
        <div v-for="smokeSession in WeedPeriod.smokeSessions" v-bind:key="smokeSession.id">
        <a  v-on:click="detailsSmokeSession(smokeSession.id)" class="list-group-item list-group-item-action flex-column align-items-start">{{ smokeSession.name }}
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{smokeSession.name}}</h5>
            <small>{{smokeSession.startDate| moment('LL')}}</small>
          </div>
          <hr />
          <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Aantal joints:</span><span>{{smokeSession.jointsSmoked}} joints</span> </h6>
          <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Tijd in minuten:</span><span> {{smokeSession.duration}} minuten</span> </h6>
        </a>
        <br/>
        </div>

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
        id: 1,
        name:"basic weed periode",
        startDate: new Date(),
        endDate: new Date(),
        averageGramPerJoint: 0.5,
        costPerGram: 10,
        averageJointsSmoked: 10,
        averageDuration: 120,
        averageCostPerWeek:0 ,
        totalJoints:0,
        totalCosts:0,
        totalTime:0,
        isInitial: false,
        smokeSessions: [{
          id:1,
          name:"gezellig met vrienden",
          startDate: new Date(),
          jointsSmoked: 10,
          duration:60,
        },
        {
          id: 2,
          name:"gezellig met vrienden 2",
          startDate: new Date(),
          jointsSmoked: 10,
          duration:80,
        }]
      },
      errors: [],
    }
  },
  created: function () {
    this.WeedPeriod.averageCostPerWeek = this.WeedPeriod.averageGramPerJoint * this.WeedPeriod.averageJointsSmoked * this.WeedPeriod.costPerGram;
    for (var i = 0; i < this.WeedPeriod.smokeSessions.length; i++) {
      this.WeedPeriod.totalJoints += this.WeedPeriod.smokeSessions[i].jointsSmoked;
      this.WeedPeriod.totalTime += this.WeedPeriod.smokeSessions[i].duration;
    }
    this.WeedPeriod.totalCosts = this.WeedPeriod.totalJoints * this.WeedPeriod.costPerGram * this.WeedPeriod.averageGramPerJoint
      },
  methods: {
    deleteWeedPeriod() {
      //TODO delete
    },
    overview() {
      //TODO overview
    },
    addSmokeSession() {
      //TODO delete
    },
    detailsSmokeSession() {
      //TODO detail Smoke session

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