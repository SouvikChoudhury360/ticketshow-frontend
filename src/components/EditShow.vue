<template>
    <div v-if="show">
	<div class="jumbotron text-center cyan">
		<h2>Edit {{show.name}}</h2>
        <router-link to="/admindashboard"
        >See all already created venues and shows here</router-link>
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
                <input type="datetime-local" class="form-control" name="start_time" v-model="show.starting_time">
                <label for="end_time">Ending Time:</label>
                <input type="datetime-local" class="form-control" name="end_time" v-model="show.ending_time">
			</div>
			<button type="submit" class="btn btn-primary" @click="submitData">Edit</button>
		</form>
	</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditShow',
    data(){
        return{
            showid: this.$route.params.showid,
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
        this.show.starting_time = this.formatDate(this.show.starting_time);
        this.show.ending_time = this.formatDate(this.show.ending_time);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    formatDate(inputDate) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const dateParts = inputDate.split(' ');
  const day = dateParts[1];
  const month = months.indexOf(dateParts[2]) + 1;
  const year = dateParts[3];
  const time = dateParts[4].slice(0, -3);
  const formattedDate = `${year}-${(month < 10 ? '0' : '') + month}-${(day < 10 ? '0' : '') + day}T${time}:00.000Z`;

  return formattedDate;
},
    submitData(e){
        axios({
        method: "patch",
        url: `https://ticketshow-api.onrender.com/show/${this.$route.params.showid}/edit`,
        data: this.show,
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((result) => {
          console.log(result.data)
          let dashurl = '/admindashboard'
          this.$router.push({path: dashurl})
        }).catch((err) => {
          console.log(this.show)
          window.alert(err.response.data)
        });
        e.preventDefault();
    }
  }
}
</script>

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