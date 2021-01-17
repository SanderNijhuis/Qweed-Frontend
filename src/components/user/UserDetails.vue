<template>
  <div id="UserPage" class="md-4" v-if="isLoaded">
    <h1> Profile </h1>
    <div class="d-flex w-50 justify-content-between">
      <label class="b-form-btn-label-control" for="name">Username: </label>
      <span id="name" v-if="User">{{ User.userName }}</span>
      <!-- <span v-else>gebruikernaam kan momenteel niet worden opgehaald.</span> -->
    </div>

    <br>
    <div class="d-flex w-50 justify-content-between">
      <label class="b-form-btn-label-control" for="motivation">Motivation: </label>
      <span id="motivation" v-if="User">{{ User.motivation }}</span>
      <!-- <span v-else>Motivatie kan momenteel niet worden opgehaald.</span> -->
     </div>
     <br>
     <button v-on:click="deleteUser" class="btn btn-danger" type="submit">Delete User</button>
   </div>
 </template>

 <script>
 import UserDataService from "../../services/UserDataService";
 import LocalStorageService from "../../services/LocalStorageService";

 //import UserDataService from "@/services/UserDataService";

 export default {
     name:"User",
     data: function (){
         return{
           usertoken:-1,
           User: null,
           isLoaded: true
         }
     },
     methods:{
       deleteUser() {
         UserDataService.deleteUser(LocalStorageService.getUser(),LocalStorageService.getUsername());
         this.$router.push('/Login');
       },
     },
     mounted() {

     this.usertoken = LocalStorageService.getUser();
     if (this.usertoken) {
       if (this.usertoken !== -1) {
         UserDataService.retrieveUser(LocalStorageService.getUser(),LocalStorageService.getUsername()).then(
             (res) => {
               this.User = res.data
             })
       }
       this.isLoaded = true;
     }


   }


 }
 </script>
 <style lang="css" scoped>
 .d-flex{
   margin-left:25%

 }
 </style>