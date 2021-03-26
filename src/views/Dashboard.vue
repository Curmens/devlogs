<template>
  <div class="dashboard">
    <header class="display-header bg-primary">
      <img :src="userData.avatar_url" alt="Avatar">
      <div>{{userData.name}}</div>
    </header>
    <h1>This is the stats page</h1>
    {{userData}}
  </div> 
</template>

<script>
// import {mapGetters} from "vuex";
export default {
  data(){
    return {
      props: '',
      // user_data: []
      userData:  this.$store.state.userdata.user_data,
    }
  },
    computed:{
      getuserdata(){
        return this.$store.state.userdata.user_data
      }
    },
    mounted(){
      // this.user_data = this.$store.state.userdata.user_data;
    }
}
</script>

<style scoped>
.display-header {
  height: 95vh;
}
</style>
