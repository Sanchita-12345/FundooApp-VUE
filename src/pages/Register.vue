<template>
    <div class="main">
        <form @submit.prevent="handleSubmit">
        <div class="head">
        <img src="https://uspto.report/TM/88624243/mark" alt="" class="logo">
        <h3>Create your FundooApp Account</h3>
      </div>
      <div class="name">
        <input type="name" v-model="firstname" required>
        <label>First name</label>
      </div>
      <div class="name">
        <input type="name" v-model="lastname" required>
        <label>Last name</label>
      </div>
      <div class="user-name">
        <input type="username" v-model="username" required>
        <label>Username</label>
        
        <!-- <span class="gmail">@gmail.com</span> -->
      </div>
      <!-- <a class="line1">You can use letters, numbers & periods</a> -->
      <!-- <a href="" class="line2">Use my current email address instead</a> -->
      <div class="pass">
            <input :type="password_type" class="password" v-model="password" id="pass1" required>
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
      <input type="submit"  value="Next" @click="submitForm">
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
    import { required, email, minLength, sameAs} from '@vuelidate/validators'
    import { reactive, computed } from 'vue'


    Vue.use(VueAxios, axios)
    export default{
        name: 'Register',
        setup() {
          const state = reactive({
            firstname: { required },
            lastname:{required},
            password:{required},
            password_confirmation:{required},
          })

          const rules = computed(()=>{
          return{
            firstname: { required, minLength: minLength(3)},
            lastname:{required, minLength: minLength(2)},
            password:{required, minLength: minLength(6)},
            password_confirmation:{required, sameAs: sameAs(state.password.password)},
          }
        }
      )
      const v$ = useValidate(rules, state)
        return { 
          state,
           v$,
        }
      },

        data(){
            return{
                v$: useValidate(),
                name: '',
                email: '',
                password: '',
                password_type: "password",
                password_toggle_element: "show",
            }
        },

        
        methods: {
          submitForm(){
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) { // if ANY fail validation
              alert('Form successfully submitted.')
            } else {
              alert('Form failed validation')
            }            
          },
          togglePasswordButton() {
            this.password_type = this.password_type === 'password' ? 'text' : 'password'
          },
        async handleSubmit() {
            //e.preventDefault()

            alert("user registered successfully..!")

            //axios postmethod to communicate with api
            //register-->shortest form of url
            //await and async[const response = ]
            await axios.post('register', {
                name: this.name,
                email: this.email,
                password: this.password,
            });
            //console.log(response);
            this.$router.push('/');
        }
    }

}
</script>
