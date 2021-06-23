<template>
<form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" name="email" v-model="email" placeholder="Email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
    <input type="password" name="Password" v-model="password" placeholder="Password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." required/>
    <button class="btn btn-primary btn-block">login</button>
    <a href="http://localhost:8080/register">Create account</a>
    <a href="http://localhost:8080/forgot-password">forgot password</a>
</form>
</template>

<script>
import service from '../service/User'
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
            let userData = {
                email: this.email,
                password: this.password
            }
            service.userLogin(userData).then(response =>{
                console.log("user logged in",response);
                localStorage.setItem('token', response.data.token); 
                alert("logged in..") 
                this.$router.push('/dashboard'); 
            }).catch(error =>{
                alert("error...!!! invalid input");
                return error;
            })
        }
    }
}
</script>

<style scoped lang="scss">

@import "@/scss/Login.scss";
</style>
