<template>
<form @submit.prevent="handleSubmit">
    <!-- <div class="formx"> -->
    <h3>Login</h3>
    <!-- <img src="https://st2.depositphotos.com/5142301/7765/v/950/depositphotos_77650712-stock-illustration-f-letter-with-green-leaves.jpg">  -->

    <input type="email" name="email" v-model="email" placeholder="Email" />

    <input type="password" name="Password" v-model="password" placeholder="Password" />

    <button class="btn btn-primary btn-block">login</button>

    <a href="http://localhost:8080/register">Create account</a>
    <a href="http://localhost:8080/forgot-password">forgot password</a>
    <!-- </div> -->
</form>
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
            this.$router.push('/dashboard');

        }
    }
}
</script>

<style scoped src="C:\Users\sanch\Desktop\8\fundooapp\src\styles\Login.css">

</style>
