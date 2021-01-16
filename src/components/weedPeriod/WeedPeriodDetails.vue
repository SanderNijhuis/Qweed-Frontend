<template>
  <div>
    <h1>Details</h1>
    <div id="UserPage"  v-if="isLoaded">
      <h1>  Wietrook sessie: </h1>

      <div v-if="errors.length">
        <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
      </div>

      <label class="b-form-btn-label-control"  for="name">Naam</label>
      <span id="name" v-if="SmokeSession.name">{{SmokeSession.name}}</span>
      <span v-else>Naam kan momenteel niet worden opgehaald.</span>

      <label class="b-form-btn-label-control"  for="startDate">Start datum</label>
      <span id="startDate" v-if="SmokeSession.startDate">{{SmokeSession.startDate}}</span>
      <span v-else>Start datum kan momenteel niet worden opgehaald.</span>

      <label class="b-form-btn-label-control"  for="jointsSmoked">Aantal joints</label>
      <span id="jointsSmoked" v-if="SmokeSession.jointsSmoked">{{SmokeSession.jointsSmoked}}</span>
      <span v-else>Aantal joints kan momenteel niet worden opgehaald.</span>

      <label class="b-form-btn-label-control"  for="duration">Tijd in minuten</label>
      <span id="duration" v-if="SmokeSession.duration">{{SmokeSession.duration}}</span>
      <span v-else>Tijd in minuten kan momenteel niet worden opgehaald.</span>
    </div>
    <hr/>

    <div class="list-group-item  flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{SmokeSession.name}}</h5>
        <small>{{SmokeSession.startDate}}</small>
      </div>
      <hr />
      <h6 class="mb-1">Joints smoked: {{SmokeSession.jointsSmoked}} </h6>
      <div class="d-flex w-100 justify-content-between">
        <button v-on:click="deleteSmokeSession" class="btn btn-primary" type="submit">Account aanmaken </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "SmokeSessionDetails",
  data(){
    return{
      SmokeSession: null,
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

</style>