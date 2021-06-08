<template>
<form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" name="email" v-model="email" placeholder="Email" />
    <input type="password" name="Password" v-model="password" placeholder="Password" />
    <button class="btn btn-primary btn-block">login</button>
    <a href="http://localhost:8080/register">Create account</a>
    <a href="http://localhost:8080/forgot-password">forgot password</a>
</form>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {  //data which are to be returned
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('/login', { //connecting backend using axios
                email: this.email,
                password: this.password
            });
            alert("logged in..") //alert message
            localStorage.setItem('token', response.data.token); //locally storing token
            this.$router.push('/dashboard'); //redirecting to the dashboard

        }
    }
}
</script>

<style scoped lang="scss">

@import "@/SCSS/Login.scss";
</style>
