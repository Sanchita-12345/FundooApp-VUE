<template>
    <div class="form">
    <h3>Forgot Password</h3>
                             
    <input type="email" name="email" placeholder="Email" />
   
  <button>Submit</button>
   

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Forgot',
    data(){
        return{
            email: ''
        }
    },
    methods: {
        async handleSubmit(){
            const response = await axios.post('http://127.0.0.1:8000/api/auth/sendPasswordResetLink',{
                email: this.email
            });
            console.log(response);
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
  
  .form {
    background-color: #ffffff;
    width: 415px;
    margin: 185px auto 10px auto;
    padding: 30px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px -3px #333;
    text-align: center;
  }
  
  input {
    border-radius: 100px;
    padding: 10px 15px;
    width: 77%;
    border: 1px solid #D9D9D9;
    outline: none;
    display: block;
    margin: 35px auto 20px auto;
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
    margin: 35px auto 10px auto;
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
