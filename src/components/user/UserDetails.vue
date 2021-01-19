<template>
  <div id="UserPage" class="md-4" v-if="isLoaded">
    <h1> Profile </h1>
    <div id="UserDetails">
      <div class="d-flex w-50 justify-content-between">
        <label class="b-form-btn-label-control" for="name">Username: </label>
        <span id="name" v-if="user">{{ user.userName }}</span>
        <!-- <span v-else>gebruikernaam kan momenteel niet worden opgehaald.</span> -->
      </div>

      <br>
      <div class="d-flex w-50 justify-content-between">
        <label class="b-form-btn-label-control" for="motivation">Motivation: </label>
        <span id="motivation" v-if="user">{{ user.motivation }}</span>
        <!-- <span v-else>Motivatie kan momenteel niet worden opgehaald.</span> -->
       </div>
    </div>
    <br>
    <button v-on:click="deleteUser" class="btn btn-danger" type="submit">Delete User</button>
    <hr>
    <div class="container">
      <div class="list-group" v-if="user">
        <div v-for="weedperiod in user.weedperiods" v-bind:key="weedperiod.id">
          <a  v-on:click="detailsWeedperiod(weedperiod.id)" class="list-group-item list-group-item-action flex-column align-items-start">
            <div v-if="weedperiod.isInitial">
                <small>Initial weedperiod</small>
            </div>
            <div v-else>
              <small>weedperiod</small>
            </div>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{weedperiod.name}}</h5>
              <small>Gram per joint: {{weedperiod.averageGramPerJoint}} gram</small> <small>Cost per gram: €{{weedperiod.costPerGram}} </small><small>Cost per joint: €{{weedperiod.costPerGram * weedperiod.averageGramPerJoint}} </small>
              <small>{{ weedperiod.startDate| moment('LL') }}</small>
            </div>
            <hr />
            <div v-if="weedperiod.isInitial">
              <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Average joints per week:</span> <span>{{weedperiod.averageJointsSmoked}} joints </span> </h6>
              <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Average costs per week:</span><span>€ {{weedperiod.averageCostPerWeek}} </span> </h6>
              <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Average time per week:</span><span>{{weedperiod.averageDuration}} minutes </span> </h6>
            </div>
            <div v-else>
              <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Total joints:</span> <span>{{weedperiod.totalJoints}} joints </span> </h6>
              <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Total Costs:</span><span>{{weedperiod.totalCosts}} euro </span> </h6>
              <h6 class="mb-1 d-flex w-75 justify-content-between"><span>Total Time:</span><span>{{weedperiod.totalTime}} minutes </span> </h6>
            </div>
            <hr />
            <div class="d-flex w-100 justify-content-between">
              <h6 v-if="weedperiod.isInitial" class="mb-1"></h6>
              <div v-else class="d-flex w-100 justify-content-between">
                <h6  v-if="weedperiod.smokeSessions" class="mb-1">Number of smoke sessions: {{weedperiod.smokeSessions.length}}</h6>
                <span v-else class="md-1"> </span>
                <small>{{ weedperiod.endDate | moment('LL') }}</small>
              </div>
            </div>
          </a>
          <br/>
        </div>
      </div>
    </div>
   </div>
 </template>

 <script>
 import UserDataService from "../../services/UserDataService";
 //import WeedperiodDataService from "@/services/WeedperiodDataService";
 import LocalStorageService from "../../services/LocalStorageService";

 export default {
     name:"User",
     data: function (){
         return{
           usertoken:-1,
           user:null,
           weedperiods: null,
           isLoaded: true
         }
     },
     methods:{
       deleteUser() {
         UserDataService.deleteUser(LocalStorageService.getUser(),LocalStorageService.getUsername());
         this.$router.push('/Login');
       },
       addWeedperiod() {
         //TODO delete
       },
       detailsWeedperiod() {
         //TODO detail Smoke session

       },
     },

     mounted() {

     this.usertoken = LocalStorageService.getUser();
     if (this.usertoken) {
       if (this.usertoken !== -1) {
         UserDataService.retrieveUser(LocalStorageService.getUser(),LocalStorageService.getUsername()).then(
             (res) => {
               this.user = res.data
               this.weedperiods = res.data.weedperiods

               this.weedperiods = this.weedperiods.sort((x,y) => y.isInitial - x.isInitial)
               if(this.weedperiods) {
                 for (var i = 0; i < this.weedperiods.length; i++) {
                   console.log(i)
                   if (this.weedperiods[i].isInitial) {
                     this.weedperiods[i].averageCostPerWeek = this.weedperiods[i].averageGramPerJoint * this.weedperiods[i].averageJointsSmoked * this.weedperiods[i].costPerGram;
                   } else {
                     if(this.weedperiods[i].smokeSessions) {
                       for (var j = 0; i < this.weedperiods[i].smokeSessions.length; j++) {
                         console.log(j)
                         this.weedperiods[i].totalJoints += this.weedperiods[i].smokeSessions[j].jointsSmoked;
                         this.weedperiods[i].totalTime += this.weedperiods[i].smokeSessions[j].duration;
                       }
                       this.weedperiods[i].totalCosts = this.weedperiods[i].totalJoints * this.weedperiods[i].costPerGram * this.weedperiods[i].averageGramPerJoint
                     }
                   }
                 }
               }
             })
       }
       this.isLoaded = true;
     }


   }


 }
 </script>
 <style lang="css" scoped>
#UserDetails{
  margin-left:25%;
}
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