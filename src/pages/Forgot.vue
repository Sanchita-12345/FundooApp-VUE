<template>
<div class="box">
    <div class="inner-box">
        <form @submit.prevent="handleSubmit">
            <h3>Forgot Password</h3>
            <input type="email" v-model="email" placeholder="Email Address" />
            <button type="submit" class="btn btn-primary btn-block">submit</button>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'  //axios for connecting backend with front end
export default {
    name: 'Forgot',
    data() {           //data which are to be returned
        return {
            email: ''
        }
    },
    methods: {
        async handleSubmit() {     //connecting the backend
            const response = await axios.post('http://127.0.0.1:8000/api/auth/sendPasswordResetLink', {
                email: this.email
            });
            console.log(response);
            this.$router.push('/resetPassword/:resetToken')   //push to the reset password page
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/SCSS/Forgot.scss";
</style>
