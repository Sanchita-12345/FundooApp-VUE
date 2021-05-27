<template>
    <form @submit.prevent="handleSubmit">
        <h3>Reset Password</h3>

        <div class="form-group">
            <input type="password" class="form-control form-control-lg" v-model="password" required />
        </div>

        <div class="form-group">
            <input type="password" class="form-control form-control-lg" v-model="password_confirmation" required />
        </div>
        <button type="submit" class="btn btn-primary btn-block">submit</button>
    </form>
</template>

<script>
    import axios from 'axios'
    export default{
        name:'Reset',
        data(){
            return{
                resetToken: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        },
        methods: {
            async handleSubmit(){
                const response = await axios.post('http://127.0.0.1:8000/api/auth/resetPassword',{
                    token:this.$route.params.token,
                    email:this.email,
                    password:this.password,
                    password_confirmation:this.password_confirmation
                });
                alert("password updated successfully");
                console.log(response);
                this.$router.push('/');
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
  
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid #9c9c9c;
    border-radius: 10px;
    width: 430px;
    height: 280px;
    text-align: center;
    padding: 25px;
    background: #fff;
  }
  
  input {
    height: 15%;
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
    margin: 45px auto 10px auto;
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
