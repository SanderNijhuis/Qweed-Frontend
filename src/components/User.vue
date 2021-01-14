<template>
<div v-if="isLoaded">
  <h1>  Profiel: </h1>
    
 Gebruikersnaam:  <span v-if="User">{{User.username}}</span>
   <span v-else>gebruikernaam kan momenteel niet worden opgehaald.</span>
   
      
 Motivatie:  <span v-if="User">{{User.motivation}}</span>
   <span v-else>Motivatie kan momenteel niet worden opgehaald.</span>
    </div>
</template>

<script>
import UserDataService from "../services/UserDataService";
import LocalStorageService from "../services/LocalStorageService";

export default {
    name:"User",
    data(){
        return{
          userid:-1,
          User: null,
          isLoaded: false
        }
    },
    
    created(){
       this.userid = LocalStorageService.getUser();
        if(this.userid!== null ||this.data.userid !== -1){
            UserDataService.retrieveUser(this.userid).then(
                (res)=>{
                    this.User = res.data
                })
            
            // eslint-disable-next-line no-console
            console.log(this.User)
        }
        this.isLoaded = true;
    
    }
}
</script>