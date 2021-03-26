<template>
  <div class="dashboard">
    <header class="display-header bg-primary  my-auto">
      <div class="userheader text-center flex flex-col">
        <img :src="userData.avatar_url" alt="Avatar" class="avatar">
        <h1 class="profilename text-primary">{{userData.name}}</h1>
        <a class="username text-danger" :href="userData.html_url">@{{userData.login}}</a>
        <div class="loc-date text-info flex flex-row">
          <div class="date flex flex-row">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <p class="ml-2"> Joined {{joined}}</p>
          </div>
          <div class="loc flex flex-row">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p class="ml-2"> {{userData.location}}</p>
          </div>
        </div>
      </div>
    </header>
    <h1>This is the stats page</h1>
    {{userData}}
  </div> 
</template>

<script>
// import {mapGetters} from "vuex";
// import sf_Font from '@/assets/fonts/SFMonoBold.woff'
export default {
  data(){
    return {
      props: '',
      userData:  this.$store.state.userdata.user_data,
      joined: ''
    }
  }, 
    computed:{
      getDate(){
        let date = new Date(this.$store.state.userdata.user_data.created_at)
        return date.toDateString()
      },
      getuserdata(){
        return this.$store.state.userdata.user_data
      }
    },
    mounted(){ 
      this.joined = this.getDate;
    }
}
</script>

<style scoped>

.dashboard{
  font-family: Inter;
}

.userheader{
  place-items: center;
}

.display-header {
  height: 95vh;
}

.avatar{
  margin: 20px auto;
  width: 150px;
  border: 8px solid #2069e0;
  border-radius: 100%;
  vertical-align: middle;
}

.profilename{
  font-weight: 500;
  font-size: 40px;
}

.username{
  font-size: 25px;
  /* text-transform: lowercase; */
  font-family: 'Space Mono';
}

.loc-date{
  width: 25rem;
  place-content: center;
}
</style>
