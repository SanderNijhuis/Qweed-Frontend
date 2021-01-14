<template >
<div  >
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Qweed</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav v-if="['Register'].indexOf($route.name) && ['Login'].indexOf($route.name) && ['root'].indexOf($route.name)">

      <b-navbar-nav>
        <b-nav-item href="/Overview">Overzicht</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" disabled>Zoeken</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em></em>
          </template>
          <b-dropdown-item href="#">Mijn profiel</b-dropdown-item>
          <b-dropdown-item href="/Logout">Uitloggen</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <br>
    <div class="container">
    <router-view/>
  </div>
</div>
</template>
<script>
export default {
  name: 'Navigation',
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5632e4;
  margin-top: -0px !important;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #32e4e4;

    &.router-link-exact-active {
      color: #af32e4;
    }
  }
}
</style>