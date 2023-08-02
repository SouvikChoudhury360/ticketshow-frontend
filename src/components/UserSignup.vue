<template>
  <div>
    <div class="jumbotron text-center cyan">
      <h2>SignUp</h2>
      <router-link to="/login">Already have an account ? Click here to Login !</router-link>
      <br>
      <br>
      <router-link to="/">Go to home</router-link>
    </div>
    <div class="container box" style="text-align:center;">
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" name="email" v-model="post.email">
          <label for="username">Name:</label>
          <input type="text" class="form-control" name="name" v-model="post.name">
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
  name: 'UserSignup',
  data(){
    return{
      post:{
        email:null,
        name:null,
        password:null
      }
    }
  },
  methods: 
  {
    submitData(e){
        axios({
        method: "post",
        url: `https://ticketshow-api.onrender.com/signup`,
        data: this.post,
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((result) => {
          console.log(result.data)
          let loginurl = '/login'
          this.$router.push({path: loginurl})
        }).catch((err) => {
          window.alert(err)
        });
        e.preventDefault();
    }
  }
};
</script>
