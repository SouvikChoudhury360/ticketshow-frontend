<template>
  <div v-if="show">
    <div class="jumbotron text-center cyan">
      <h2>Book Ticket for {{show.title}}</h2>
      <div>Seats Left: {{show.seats_left}}</div>
    </div>
    <div class="container box" style="text-align:center;">
      <form method="POST">
        <div class="form-group">
          <label for="count">Ticket Count:</label>
          <input type="number" class="form-control" name="count" :max="show.seats_left" :min="1" v-model="booking.count">
          <div>Per Ticket Price: ₹{{show.ticket_price}}</div>
        </div>
        <button type="submit" class="btn btn-primary" @click="submitData">Book</button>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'CreateBooking',
  data(){
    return {
        booking: {
            userid:this.$route.params.userid,
            count:null,
        },
        show: null
    }
  },
  created() {
    this.getShow()
  },
  methods: 
  {
      async getShow() {
      try {
        const response = await axios.get(`https://ticketshow-api.onrender.com/show/${this.$route.params.showid}`);
        this.show = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    submitData(e){
        axios({
        method: "post",
        url: `https://ticketshow-api.onrender.com/booking/${this.$route.params.showid}`,
        data: this.booking,
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((result) => {
          console.log(result.data)
          let dashurl = '/dashboard/' + this.booking.userid
          this.$router.push({path: dashurl})
        }).catch((err) => {
          console.log(this.booking)
          window.alert(err.response.data)
        });
        e.preventDefault();
    }
  }
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
