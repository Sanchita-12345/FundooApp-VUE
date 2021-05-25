<template>
    <form @submit.prevent="handleSubmit">
        <h3>Forgot Password</h3>

        <div class="form-group">
            <input type="email" class="form-control form-control-lg" v-model="email" required />
            <label>Email</label>
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
    </form>
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
        }
    }   
}
</script>

<style>

</style>
