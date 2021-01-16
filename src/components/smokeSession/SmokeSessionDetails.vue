<template>
  <div>
    <div id="UserPage" >
      <h4>  Wietrook sessie: </h4>

      <div v-if="errors.length">
        <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
      </div>

      <label class="b-form-btn-label-control" >Naam: </label>
      <span id="name" v-if="SmokeSession.name">{{SmokeSession.name}}</span>
      <div v-else>Naam kan momenteel niet worden opgehaald.</div>
      <br>

      <label class="b-form-btn-label-control"  >Start datum: </label>
      <span id="startDate" v-if="SmokeSession.startDate">{{SmokeSession.startDate | moment('LL')}}</span>
      <span v-else>Start datum kan momenteel niet worden opgehaald.</span>
      <br>

      <label class="b-form-btn-label-control"  for="jointsSmoked">Aantal joints:</label>
      <span id="jointsSmoked" v-if="SmokeSession.jointsSmoked">{{SmokeSession.jointsSmoked}}</span>
      <span v-else>Aantal joints kan momenteel niet worden opgehaald.</span>
      <br>

      <label class="b-form-btn-label-control"  for="duration">Tijd:</label>
      <span id="duration" v-if="SmokeSession.duration">{{SmokeSession.duration}} minuten</span>
      <span v-else>Tijd in minuten kan momenteel niet worden opgehaald.</span>
      <br>
    </div>
    <hr/>

    <div class="list-group-item  flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{SmokeSession.name}}</h5>
        <small>{{SmokeSession.startDate| moment('LL')}}</small>
      </div>
      <hr />
      <h6 class="mb-1">Joints smoked: {{SmokeSession.jointsSmoked}} </h6>
      <h6 class="mb-1">Tijd: {{SmokeSession.duration}} minuten </h6>
      <div class="d-flex w-100 justify-content-between">
        <span></span>
        <button v-on:click="deleteSmokeSession" class="btn btn-danger" type="submit">Delete </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "SmokeSessionDetails",
  data(){
    return{
      SmokeSession: {
        name:"gezellig met vrienden",
        startDate: new Date(),
        jointsSmoked: 10,
        duration:120,
      },
      errors: [],
    }
  },
  methods: {
    deleteSmokeSession() {
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
h6{
  text-align: left;
}
</style>