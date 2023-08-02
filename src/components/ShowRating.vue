<template>
    <div>
	<div class="jumbotron text-center cyan" v-if="show">
		<h2>Rate {{show.title}}</h2>
	<div class="container box" style="text-align:center;">
		<form>
			<div class="form-group">
                <label for="rating">Your Rating:  [Rate between 1 and 5]</label>
				<input type="number" class="form-control" name="rating" min="1" max="5" v-model="rate.rating">
			</div>
			<button type="submit" class="btn btn-primary" @click="submitData">Rate</button>
		</form>
	</div>
    </div>
    </div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'ShowRating',
  data(){
    return {
        rate: {
            userid:this.$route.params.userid,
            rating:null,
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
        url: `https://ticketshow-api.onrender.com/rating/${this.$route.params.showid}`,
        data: this.rate,
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((result) => {
          console.log(result.data)
          let dashurl = '/dashboard/' + this.rate.userid
          this.$router.push({path: dashurl})
        }).catch((err) => {
          console.log(this.rate)
          window.alert(err.response.data)
        });
        e.preventDefault();
    }
  }
};
</script>