<template>
  <div>
    <div class="jumbotron text-center cyan">
      <h2>Create Venue</h2>
      <router-link to="/admindashboard">See all already created venues here</router-link>
    </div>
    <div class="container box" style="text-align:center;">
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" name="name" v-model="venue.name">
          <label for="address">Address:</label>
          <input type="text" class="form-control" name="address" v-model="venue.address">
          <label for="capacity">Capacity:</label>
          <input type="number" class="form-control" name="capacity" v-model="venue.capacity">
        </div>
        <button type="submit" class="btn btn-primary" @click="submitData">Create</button>
      </form>
    </div>
  </div>
</template>

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

<script>
const axios = require("axios");
export default {
  name: 'CreateVenue',
  data() {
    return {
      venue: {
        address: null,
        name: null,
        capacity: null
      }
    };
  },
  methods: {
    submitData(e) {
      axios({
        method: "post",
        url: `https://ticketshow-api.onrender.com/createVenue`,
        data: this.venue,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => {
          console.log(result.data);
          let dashurl = '/admindashboard/';
          this.$router.push({ path: dashurl });
        })
        .catch((err) => {
          window.alert(err);
        });
      e.preventDefault();
    },
  },
};
</script>
