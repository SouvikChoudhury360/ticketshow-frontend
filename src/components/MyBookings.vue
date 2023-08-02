<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <h1 class="navbar-brand">My Bookings</h1>
    </nav>
    <div v-if="bookings">
    <div v-for="booking in bookings" :key="booking.id">
      <div class="my-div">
        <div class="row">
          <div class="my-text">{{ booking.show }}</div>
          <div class="my-text">{{ booking.venue }}, {{ booking.address }}</div>
          <div class="my-text">Ticket Count: {{ booking.ticket_count }}</div>
          <div v-if="!booking.israted">
          <router-link :to="{ name: 'ShowRating', params: { userid: this.$route.params.userid, showid: booking.show_id } }" class="btn btn-outline-primary">Rate</router-link>
          </div>
          <div v-if="booking.israted">
            <div class="btn btn-outline-secondary">Rated</div>
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
  name: 'MyBookings',
  data() {
    return {
      bookings: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`https://ticketshow-api.onrender.com/mybookings/${this.$route.params.userid}`);
        this.bookings = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
}
</script>

<style>
.my-div {
  background-color: aliceblue;
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
