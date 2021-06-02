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
            <!-- <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/b5993922679119.56316a0ca4a90.png" alt="" class="logo"> -->
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
            <img src="https://icon-library.com/images/show-hide-icon/show-hide-icon-28.jpg" onclick="show();" id="eye" @click="togglePasswordButton()">
        </div>
        <a class="line3">Use 8 or more characters with a mix of letters, numbers & symbols</a>
        <a href="http://localhost:8080/" class="line4">Sign in instead </a>
        <input type="submit" value="Next">
    </form>
    <div class="side-image">
        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" class="side-logo">
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import useValidate from '@vuelidate/core'
//import { required, email, minLength, sameAs} from '@vuelidate/validators'
//import { reactive, computed } from 'vue'

Vue.use(VueAxios, axios)
export default {
    name: 'Register',

    data() {
        return {
            //v$: useValidate(),
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
            //e.preventDefault()

            alert("user registered successfully..!")

            //axios postmethod to communicate with api
            //register-->shortest form of url
            //await and async[const response = ]
            await axios.post('/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            });
            //console.log(response);
            this.$router.push('/');
        }
    }

}
</script>
