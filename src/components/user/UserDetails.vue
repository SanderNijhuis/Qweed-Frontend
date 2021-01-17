<template>
<div id="UserPage"  v-if="isLoaded">
  <h1>  Profiel: </h1>

  <label class="b-form-btn-label-control"  for="name">Gebruikersnaam</label>
  <span id="name" v-if="User.username">{{User.username}}</span>
   <span v-else>gebruikernaam kan momenteel niet worden opgehaald.</span>

  <label class="b-form-btn-label-control"  for="motivation">Motivatie</label>
  <span id="motivation" v-if="User.motivation">{{User.motivation}}</span>
   <span v-else>Motivatie kan momenteel niet worden opgehaald.</span>
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
    userid:-1,
    data: function (){
        return{
          userid:-1,
          User: null,
          isLoaded: false
        }
    },
    methods:{
      deleteUser() {
        UserDataService.deleteUser(this.User.id);
      },
    },
    mounted() {

      this.userid = LocalStorageService.getUser();
      if (this.userid) {
        if (this.userid !== -1) {
           UserDataService.retrieveUser(this.userid).then(
             (res)=>{
                this.User = res.data
             })
          } else {
           // this.$router.push('/Login');
          }
          this.isLoaded = true;

        } else {
          //this.$router.push('/Login');
        }


      }


    }
</script>