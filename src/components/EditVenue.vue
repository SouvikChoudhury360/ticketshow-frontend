<template>
  <div v-if="venue">
    <div class="jumbotron text-center cyan">
      <h2>Edit Venue</h2>
      <router-link to="/admindashboard">See all already created venues here</router-link>
    </div>
    <div class="container box" style="text-align:center;">
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" name="name" v-model="venue.name" />
          <label for="address">Address:</label>
          <input type="text" class="form-control" name="address" v-model="venue.address" />
          <label for="capacity">Capacity:</label>
          <input type="number" class="form-control" name="capacity" v-model="venue.capacity" />
        </div>
        <button type="submit" class="btn btn-primary" @click="submitData">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditVenue',
  data() {
    return {
      venueid: this.$route.params.venueid,
      venue: null,
    };
  },
  created() {
    this.getVenue();
  },
  methods: {
    async getVenue() {
      try {
        const response = await axios.get(`https://ticketshow-api.onrender.com/venue/${this.$route.params.venueid}`);
        this.venue = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    submitData(e) {
      axios({
        method: 'patch',
        url: `https://ticketshow-api.onrender.com/venue/${this.$route.params.venueid}/edit`,
        data: this.venue,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((result) => {
          console.log(result.data);
          let dashurl = '/admindashboard';
          this.$router.push({ path: dashurl });
        })
        .catch((err) => {
          console.log(this.venue);
          window.alert(err.response.data);
        });
      e.preventDefault();
    },
  },
};
</script>

<style>
.box {
  padding: 24px;
  background-color: aliceblue;
  border-radius: 24px;
  border: 1px solid black;
}
.cyan {
  background-color: aliceblue;
}
.body {
  background-color: #f6f7ff;
}
</style>
