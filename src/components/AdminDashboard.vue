<template>
  <div>
    <header>
      <h1>Admin Dashboard</h1>
      <button class="btn btn-outline-primary" @click="logout">Logout</button>
    </header>
    <div v-if="venues">
      <div v-for="venue in venues" :key="venue.id">
        <div class="my-div-outer">
          <div class="row">
            <div class="font-weight-bold my-text">{{ venue.name }}</div>
            <div class="my-text">{{ venue.address }}</div>
            <div class="my-text">Capacity: {{ venue.capacity }}</div>
          </div>
          <div class="row">
            <router-link :to="{ name: 'EditVenue', params: { venueid: venue.id } }" class="btn btn-outline-primary my-text">Edit</router-link>
            <router-link :to="{ name: 'DeleteVenue', params: { venueid: venue.id } }" class="btn btn-outline-primary my-text">Delete</router-link>
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
                  <router-link :to="{ name: 'EditShow', params: { showid:  show.id} }" class="btn btn-outline-primary my-text">Edit</router-link>
                  <a href="{{ url_for('main.analytics', show_id=show.id) }}" class="btn btn-outline-primary my-text">Analytics</a>
                  <router-link :to="{ name: 'DeleteShow', params: { showid: show.id } }" class="btn btn-outline-primary my-text">Delete</router-link>
                </div>
              </div>
            </div>
          </div>
          <router-link :to="{ name: 'CreateShow', params: { venueid: venue.id } }" class="btn btn-outline-primary single">Create Show at {{ venue.name }}</router-link>
        </div>
      </div>
      <router-link to="/createvenue" class="btn btn-outline-primary single bottom">Create Venue</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminDashboard',
  data() {
    return {
      venues: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://ticketshow-api.onrender.com/shows');
        this.venues = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    logout() {
      this.$router.replace({ path: '/' });
    },
  },
};
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
  background-color: aliceblue;
}

/* Add any additional styles you need for the specific elements in your template */
</style>