<template>
<div><h4>Sorry for the wait you'll be logged out soon.</h4></div>
</template>

<script>
import LocalStorageService from "../services/LocalStorageService";

export default {
  name: "Logout",
  created() {
    if(this.userid!== null ||this.data.userid !== -1){
      LocalStorageService.clearUser();
      this.$router.push('/Login');
    }else {
      this.$router.push('/Login');
    }
  }
}


</script>

<style scoped>

</style>