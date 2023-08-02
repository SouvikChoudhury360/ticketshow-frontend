<template>
  <div>
    <div class="jumbotron text-center cyan">
      <h2>Admin SignIn</h2>
      <p>Enter password : "12345#"</p>
      <router-link to="/">Go to home</router-link>
    </div>
    <div class="container box" style="text-align: center;">
      <form>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" class="form-control" id="password" name="password" v-model="post.password">
        </div>
        <button type="submit" class="btn btn-primary" @click="submitData">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: 'AdminLogin',
  data(){
    return {
        post: {
            password:null,
        }
    }
  },
  methods: 
  {
    submitData(e){
        axios({
        method: "post",
        url: `https://ticketshow-api.onrender.com/adminAuth`,
        data: this.post,
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((result) => {
          console.log(result.data)
          let dashurl = '/admindashboard'
          this.$router.push({path: dashurl})
        }).catch((err) => {
          window.alert(err)
        });
        e.preventDefault();
    }
  }
};
</script>