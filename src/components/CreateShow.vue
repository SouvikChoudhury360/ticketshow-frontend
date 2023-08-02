<template>
    <div>
	<div class="jumbotron text-center cyan">
		<h2>Create Show</h2>
        <router-link to="/admindashboard">See all already created venues and shows here</router-link>
	</div>
	<div class="container box" style="text-align:center;">
		<form>
			<div class="form-group">
                <label for="title">Title:</label>
				<input type="text" class="form-control" name="title" v-model="show.title">
                <label for="tags">Tags:  [add all tags separeated by space]</label>
				<input type="text" class="form-control" name="tags" v-model="show.tags">
				<label for="ticket_price">Ticket Price:</label>
				<input type="number" class="form-control" name="ticket_price" v-model="show.ticket_price">
                <label for="start_time">Starting Time:</label>
                <input type="datetime-local" class="form-control" name="start_time" v-model="start_time">
                <label for="end_time">Ending Time:</label>
                <input type="datetime-local" class="form-control" name="end_time" v-model="end_time">
			</div>
			<button class="btn btn-primary" @click="submitData">Create</button>
		</form>
	</div>
    </div>
</template>

	<style>
		.box{
			padding: 24px;
			background-color: aliceblue;
			border-radius: 24px;
			border: 1px solid black;
		}
		.cyan{
			background-color: aliceblue;
		}
		.body{
			background-color: #f6f7ff;		
		}
	</style>

<script>
const axios = require("axios");
export default {
    name: 'CreateShow',
  data() {
    return {
        show: {
            title: null,
            tags: null,
            ticket_price: null,
            starting_time: null,
            ending_time: null,
        },
        start_time: null,
        end_time: null,
    };
  },
  methods: {
    submitData(e) {
      this.show.starting_time = this.formatDateTime(this.start_time)
      this.show.ending_time = this.formatDateTime(this.end_time)
      axios({
        method: "post",
        url: `https://ticketshow-api.onrender.com/${this.$route.params.venueid}/createShow`,
        data: this.show,
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
          console.log(this.show);
          window.alert(err);
        });
      e.preventDefault();
    },
    formatDateTime(input) {
        const dateStringWithoutTimezone = input.slice(0, 19);
        const date = new Date(dateStringWithoutTimezone);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
        return formattedDate;
    },
  },
}
</script>