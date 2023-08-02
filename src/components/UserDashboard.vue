<template>
  <div v-if="venues">
    <div v-if="this.$route.params.userid">
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <h1 class="navbar-brand">Dashboard</h1>
      <router-link :to="{ name: 'MyBookings', params: { userid: this.$route.params.userid } }" class="btn btn-outline-primary">My Bookings</router-link>
      <router-link to="/" class="btn btn-outline-primary">Search Shows</router-link>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </nav>
    </div>
    <div v-for="venue in venues" :key= "venue.id">
      <div class="my-div-outer">
        <div class="row">
          <div class="font-weight-bold my-text">{{ venue.name }}</div>
          <div class="my-text">{{ venue.address }}</div>
          <div class="my-text">Capacity: {{ venue.capacity }}</div>
        </div>
        <div v-if="venue.shows">
        <div v-for="show in venue.shows" :key="show.id">
          <div class="my-div">
            <div class="row">
              <div class="font-weight-bold my-text">{{ show.title }}</div>
              <div class="my-text">{{ show.starting_time }} to {{ show.ending_time }}</div>
              <div class="my-text">{{ show.tags }}</div>
            </div>
            <div class="row">
              <div class="my-text">Seats left: {{ show.capacity }}</div>
              <div v-if="show.capacity==0">
                <a href="#" class="btn btn-outline-secondary">HouseFull</a>
              </div>
              <div v-else>
                <router-link :to="{ name: 'CreateBooking', params: { userid: this.$route.params.userid, showid: show.id } }" class="btn btn-outline-primary">Book</router-link>
              </div>
              <div class="my-text">Ticket Price: ₹{{ show.ticket_price }}</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'UserDashboard',
    data(){
        return{
            userid:null,
            venues: [],
        }
    },
    created(){
      this.fetchData()
    },
    methods: {
      async fetchData() {
      try {
        console.log(this.$route.params.userid)
        const response = await axios.get('https://ticketshow-api.onrender.com/shows');
        this.venues = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    logout(){
        this.$router.replace({ path: '/' });
    }
    },

}
</script>

<style>
  .single {
    margin: auto;
  }
  .bottom {
    margin-bottom: 100px;
  }
  .my-div {
    background-color: aliceblue;
    border-radius: 16px;
    border: 1px solid black;
    padding: 24px;
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .my-div-outer {
    background-color: #f6f7ff;
    border-radius: 16px;
    border: 1px solid black;
    padding: 24px;
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  .my-text {
    margin: 4px;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }
  header {
    text-align: center;
  }

  body {
    text-align: center;
    background-color: #f6f7ff;
  }
</style>
