<template>
<form @submit.prevent="handleSubmit">
    <h3>Reset Password</h3>

    <!-- <div class="form-group">
            <input type="email" class="form-control form-control-lg" v-model="email" placeholder="email" required />
        </div> -->

    <div class="form-group">
        <input type="password" class="form-control form-control-lg" v-model="password" placeholder="password" required />
    </div>

    <div class="form-group">
        <input type="password" class="form-control form-control-lg" v-model="password_confirmation" placeholder="retype password" required />
    </div>
    <button type="submit" class="btn btn-primary btn-block">submit</button>
</form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Reset',
    data() {
        return {
            resetToken: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/resetPassword', {
                resetToken: this.$route.params.resetToken,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            });
            alert("password updated successfully");
            console.log(response);
            this.$router.push('/');
        }
    }
}
</script>

<style scoped src="C:\Users\sanch\Desktop\8\fundooapp\src\styles\Reset.css">

</style>
