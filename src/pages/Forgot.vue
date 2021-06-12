<template>
<div class="box">
    <div class="inner-box">
        <form @submit.prevent="handleSubmit">
            <h3>Forgot Password</h3>
            <input type="email" v-model="email" placeholder="Email Address" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
            <button type="submit" class="btn btn-primary btn-block">submit</button>
        </form>
    </div>
</div>
</template>

<script>
// import axios from 'axios'  
import service from '../service/User'
export default {
    name: 'Forgot',
    data() { //data which are to be returned
        return {
            email: ''
        }
    },
    methods: {

        async handleSubmit() {
            let userData = {
                email: this.email
            }
            service.userForgotPassword(userData).then(response => {
                console.log(response);
                alert("mail is sended successfully")
                this.$router.push('/resetPassword/:resetToken') //redirecting to the dashboard
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/SCSS/Forgot.scss";
</style>
