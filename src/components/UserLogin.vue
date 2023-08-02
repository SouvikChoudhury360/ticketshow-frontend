<template>
  <div>
    <div class="jumbotron text-center cyan">
      <h2>Login</h2>
      <router-link to="/signup">Don't have an account yet? Click here to Sign Up!</router-link>
      <br>
      <br>
      <router-link to="/">Go to home</router-link>
    </div>
    <div class="container box" style="text-align:center;">
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" name="email" v-model="post.email">
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
  name: 'UserLogin',
  data(){
    return {
        post: {
            email:null,
            password:null,
        }
    }
  },
  methods: 
  {
    submitData(e){
        axios({
        method: "post",
        url: `https://ticketshow-api.onrender.com/login`,
        data: this.post,
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((result) => {
          console.log(result.data)
          let dashurl = '/dashboard/' + result.data["userid"]
          this.$router.push({path: dashurl})
        }).catch((err) => {
          window.alert(err)
        });
        e.preventDefault();
    }
  }
};
</script>
