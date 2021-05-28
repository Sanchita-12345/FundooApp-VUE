<template>
    <div class="box">
      <div class="inner-box">
          <form @submit.prevent="handleSubmit">
              <h3>Forgot Password</h3>

              <input type="email" v-model="email" placeholder="Email Address"/>
              <button type="submit" class="btn btn-primary btn-block">submit</button>

              </form>
          </div>
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
            this.$router.push('/resetPassword/:resetToken')
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
  .box{
    width:400px;
    height :300px;
}
.inner-box{
    padding:20px;
}
.box h3{
    text-align: center;
    margin:5px 0px;
    color: #0e39c5;;
}
input[type="email"],button[type="submit"]{
   
    border-radius: 100px;
    padding: 10px 15px;
    width: 77%;
    height: 20%;
    border: 1px solid #D9D9D9;
    outline: none;
    display: block;
    margin: 30px auto 20px auto;;
}
button[type="submit"]{
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

form{
  background-color: #ffffff;
    width: 415px;
    margin: 10px auto 10px auto;
    padding: 30px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px -3px #333;
    text-align: center;
    height: 300px;
}
</style>
