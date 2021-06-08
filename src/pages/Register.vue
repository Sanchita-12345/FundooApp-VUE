<template>
<div class="main">
    <form @submit.prevent="handleSubmit">
        <div class="head">
            <p>
                <span style='color: blue'>F</span>
                <span style='color: red'>u</span>
                <span style='color: yellow'>n</span>
                <span style='color: blue'>d</span>
                <span style='color: green'>o</span>
                <span style='color: red'>o</span>
            </p>
            <h3>Create your FundooApp Account</h3>
        </div>

        <div class="name">
            <input type="name" required pattern="[A-Za-z]{3,10}">
            <label>First name</label>
        </div>

        <div class="name">
            <input type="name" required v-model="name" pattern="[A-Za-z]{3,10}">
            <label>Last name</label>
        </div>

        <div class="user-name">
            <input type="username" v-model="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
            <label>Username</label>
        </div>

        <div class="pass">
            <input :type="password_type" class="password" v-model="password" id="pass1" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" required>
            <label>Password</label>
        </div>

        <div class="pass">
            <input :type="password_type" class="password" v-model="password_confirmation" id="pass2" required>
            <label>Confirm</label>
        </div>

        <div class="iconeye">
            <img src="../../src/assets/show-hide-icon-28.jpg" onclick="show();" id="eye" @click="togglePasswordButton()">
        </div>

        <a class="line3">Use 8 or more characters with a mix of letters, numbers & symbols</a>
        <a href="http://localhost:8080/" class="line4">Sign in instead </a>
        <input type="submit" value="Next">
    </form>
    <div class="side-image">
        <img src="../../src/assets/images.jpg" alt="google-sign-in-logo" class="side-logo">
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
    name: 'Register',

    data() {   //data to be returned
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            password_type: "password",
            password_toggle_element: "show",
        }
    },

    methods: {

        togglePasswordButton() {
            this.password_type = this.password_type === 'password' ? 'text' : 'password'
        },
        async handleSubmit() {
            //axios postmethod to communicate with api
            //register-->shortest form of url
            //await and async[const response = ]
            await axios.post('/register', {   //connecting with backend using axios
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            });
            alert("user registered successfully..!")   //alert messeage
            this.$router.push('/');    //redirecting to the login page
        }
    }
}
</script>
