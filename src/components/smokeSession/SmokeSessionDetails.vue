<template>
  <div>
    <div id="UserPage" >
      <h4>  Smoke session: </h4>

      <div v-if="errors.length">
        <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
      </div>
    </div>
    <hr/>

    <div class="list-group-item  flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{SmokeSession.name}}</h5>
        <small>{{SmokeSession.startDate| moment('LL')}}</small>
      </div>
      <hr />
      <h6 class="mb-1 d-flex w-75 justify-content-between"><span>number of joints:</span><span>{{SmokeSession.jointsSmoked}} joints</span> </h6>
      <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Time in minutes:</span><span> {{SmokeSession.duration}} minutes</span> </h6>
    </div>
    <br>
      <div class="d-flex w-100 justify-content-between">
        <span></span>
        <button v-on:click="deleteSmokeSession" class="btn btn-danger" type="submit">Delete </button>
      </div>
    </div>
</template>

<script>
import LocalStorageService from "@/services/LocalStorageService";
import SmokesessionDataService from "@/services/SmokesessionDataService";
//import WeedperiodDataService from "@/services/WeedperiodDataService";

export default {

name: "SmokeSessionDetails",
  data(){
    return{
      SmokeSession: {
        name:"",
        startDate: new Date(),
        jointsSmoked: 0,
        duration: 0,
      },
      errors: [],
    }
  },
  mounted: function () {
    SmokesessionDataService.retrieveSmokesession(LocalStorageService.getUser(), this.$route.params.id).then(
        (res) => {
          this.SmokeSession = res.data
        })
  },
  methods: {
    deleteSmokeSession() {
      SmokesessionDataService.deleteSmokesession(LocalStorageService.getUser(),this.$route.params.id)
      this.$router.push('/user');
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