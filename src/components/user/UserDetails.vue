<template>
<div id="UserPage"  v-if="isLoaded">
  <h1>  Profiel: </h1>
    
 Gebruikersnaam:  <span v-if="User">{{User.username}}</span>
   <span v-else>gebruikernaam kan momenteel niet worden opgehaald.</span>
   
      
 Motivatie:  <span v-if="User">{{User.motivation}}</span>
   <span v-else>Motivatie kan momenteel niet worden opgehaald.</span>
    </div>
</template>

<script>
import UserDataService from "../../services/UserDataService";
import LocalStorageService from "../../services/LocalStorageService";

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
    
    mounted() {
      this.userid = LocalStorageService.getUser();
      if (this.userid) {
        if (this.userid !== -1) {
           UserDataService.retrieveUser(this.userid).then(
             (res)=>{
                this.User = res.data
             })
          } else {
            this.$router.push('/Login');
          }
          this.isLoaded = true;

        } else {
          this.$router.push('/Login');
        }
      }
    }
</script>