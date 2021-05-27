import 
<template>

<div class="formx">
  <h3>Login</h3>
  <!-- <img src="https://st2.depositphotos.com/5142301/7765/v/950/depositphotos_77650712-stock-illustration-f-letter-with-green-leaves.jpg">  -->
                             
<input type="email" name="email" placeholder="Email" />
   
  <input type="password" name="Password" placeholder="Password" />

  <button>login</button>
   

  <a href="http://localhost:8080/register">Create account</a>
  <a href="http://localhost:8080/forgot-password">forgot password</a>
</div>
    

</template>

<script>

    import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('/login', {
                email: this.email,
                password: this.password
            });
            alert("logged in..")
            // console.log(response)  displaying token on console
            localStorage.setItem('token', response.data.token); //locally storing token
        }
    }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
  }
  
  body {
    background-color: #eeeeee;
  }
  
  h3{
    font-family: roboto;
    font-weight: bold;
    color: #0e39c5;
    font-size:35px;
  }
  img {
    display: block;
    width: 80px;
    margin: 30px auto;
    /* box-shadow: 0 5px 10px -7px #333333; */
    border-radius: 50%;
  }
  
  .formx {
    background-color: #ffffff;
    width: 415px;
    margin: 111px auto 10px auto;
    padding: 30px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px -3px #333;
    text-align: center;
    height: 366px;
  }
  
  input {
    border-radius: 100px;
    padding: 10px 15px;
    width: 77%;
    border: 1px solid #D9D9D9;
    outline: none;
    display: block;
    margin: 20px auto 20px auto;
  }
  
  button {
    border-radius: 100px;
    border: none;
    background: #4971f6;
    width: 20%;
    padding: 10px;
    color: #FFFFFF;
    margin-top: 25px;
    box-shadow: 0 2px 10px -3px #719BE6;
    display: block;
    margin: 55px auto 10px auto;
  }
  
  a {
    text-align: center;
    margin-top: 30px;
    color: #4971f6;
    text-decoration: none;
    padding: 5px;
    display: inline-block;
  }
  
  a:hover {
    text-decoration: underline;
  }

</style>
