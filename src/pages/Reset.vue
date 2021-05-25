<template>
    <form @submit.prevent="handleSubmit">
        <h3>Reset Password</h3>

        <div class="form-group">
            <input type="email" class="form-control form-control-lg" v-model="email" required />
            <label>Email address</label>
        </div>

        <div class="form-group">
            <input type="password" class="form-control form-control-lg" v-model="password" required />
            <label>Password</label>
        </div>

        <div class="form-group">
            <input type="password" class="form-control form-control-lg" v-model="password_confirmation" required />
            <label>Confirm Password</label>
        </div>
        <button class="btn btn-primary btn-block">Submit</button>
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
                console.log(response);
                this.$router.push('/');
            }
        }
    }
</script>
