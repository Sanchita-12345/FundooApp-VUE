<template>
<form @submit.prevent="handleSubmit">
    <h3>Reset Password</h3>

    <!-- <div class="form-group">
            <input type="email" class="form-control form-control-lg" v-model="email" placeholder="email" required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
        </div> -->

    <div class="form-group">
        <input type="password" class="form-control form-control-lg" v-model="password" placeholder="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" required />
    </div>

    <div class="form-group">
        <input type="password" class="form-control form-control-lg" v-model="password_confirmation" placeholder="retype password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" required/>
    </div>
    <button type="submit" class="btn btn-primary btn-block">submit</button>
</form>
</template>

<script>
// import axios from 'axios'   
import service from '../service/User'
export default {
    name: 'Reset',
    data() {                //data which are to be returned
        return {
            resetToken: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {

        async handleSubmit(){
        let userData = {
            resetToken: this.$route.params.resetToken,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
        }
        service.userResetPassword(userData).then(response =>{
                console.log(response);
                alert("password updated successfully")
                this.$router.push('/') //redirecting to the dashboard
            }).catch(error=>{
                alert("error...!!!",error);
            })
    }
        
    }
}
</script>

<style scoped lang="scss">
@import "@/SCSS/Reset.scss";
</style>
