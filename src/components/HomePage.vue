<template>
    <div>
  <div class="jumbotron text-center cyan top">
    <h1>Welcome to TicketShow</h1>
    <p>This is a Flask Application that implements the features like adding venues, adding shows, buying tickets for the shows, rating the shows, and analytics of the reviews.</p>
  </div>
  <div class="container box">
    <div class="row">
      <div class="col-sm-4" style="text-align:center">
        <h3>User Login</h3>
        <p>Click here to login as a user.</p>
        <router-link to="/login">
        <button type="button" class="btn btn-primary">Login</button>
        </router-link>
      </div>
      <div class="col-sm-4" style="text-align:center">
        <h3>User Signup</h3>
        <p>Click here to signup as a user.</p>
        <router-link to="/signup">
        <button type="button" class="btn btn-primary">Signup</button>
        </router-link>
      </div>
      <div class="col-sm-4" style="text-align:center">
        <h3>Admin Sign in</h3>
        <p>Click here to sign in as an admin.</p>
        <router-link to="/admin_login">
        <button type="button" class="btn btn-primary">Sign in</button>
        </router-link>
      </div>
    </div>
  </div>
  <footer class="container-fluid text-center">
    <p>Made with ❤ By Souvik Choudhury</p>
  </footer>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
