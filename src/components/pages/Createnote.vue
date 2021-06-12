<template>
<div class="inbox">
    <div v-on:click="flip()" v-if="flag==true" class="small-title">
        <input type="text" placeholder="Take a note..." name="title" autocomplete="off">
        <div class="search-icon">
            <span class="lar la-check-square"></span>
            <span class="las la-paint-brush"></span>
            <span class="lar la-image"></span>
        </div>
    </div>
    <div class="card" v-if="flag==false">
        <form class="createnote" @submit.prevent="handleSubmit">

            <!-- <div v-if="flag==false" class="ball"> -->
                <input name="title" id="name-in" v-model="title" placeholder="Title" autocomplete="off" />
                <textarea name="content" id="text-in" v-model="description" placeholder="Take a note..." autocomplete="off"></textarea>
                <Icon />
                <button v-on:click="handleSubmit(); flip();" type="submit">close</button>
            <!-- </div> -->
        </form>
    </div>
</div>
</template>

<script>
// import axios from 'axios'
import service from '../../service/User'
import Icon from '../../components/pages/Icon.vue'
export default {
    name: 'Createnote',
    components: {Icon},
    data() {
        return {
            visibleNote: false,
            flag: true,
            title: '',
            description: ''
        }
    },
    methods: {
        flip() {
            this.flag = !this.flag;
        },
        async handleSubmit() {
            let userData = {
                title: this.title,
                description: this.description
            }
            // console.log("user data", userData);
            service.userCreateNote(userData).then(response => {
                console.log("notes", response);
                alert("create note successfully..");
                localStorage.getItem('token', response.data.token);
            })
        }
    }
}
</script>

<style scoped>
.small-title input{
    width: 600px;
    height: 45px;
    margin-top: 108px;
    border-radius: 7px;
    box-shadow: 5px 5px 10px #e0dede;
    font-family: roboto;
    padding: 4px 10px;
    margin-left: -90px;
    font-size: 1.1rem;
    resize: none;
}

.la-check-square {
    position: fixed;
    font-size: 28px;
    color: rgb(97, 96, 96);
    margin-left: 360px;
    margin-top: -35px;
}

.la-paint-brush {
    position: fixed;
    font-size: 28px;
    color: rgb(97, 96, 96);
    margin-left: 410px;
    margin-top: -35px;
}

.la-image {
    position: fixed;
    font-size: 28px;
    color: rgb(97, 96, 96);
    margin-left: 460px;
    margin-top: -35px;
}

.card {
    width: 100px;
    /* border: none; */
    /* outline: none; */
    padding: 4px 10px;
    font-size: 1rem;
    /* resize: none; */
    margin-left: 200px;
    margin-bottom: -200px;
    margin-top: 250px;
    position: fixed;
}

form {
    width: 620px;
    height: 150px;
    box-shadow: 5px 5px 10px #e0dede;
    margin-top: -70px;
    margin-left: -40px;
    padding: 10px;
}

form textarea {
    width: 100%;
    border: none;
    padding: 0px 10px;
    outline: none;
    font-size: 1rem;
    resize: none;
}

form input {
    width: 90%;
    border: none;
    padding: 4px 10px;
    margin-bottom: 10px;
    margin-left: 0px;
    margin-top: 2px;
    font-size: 1.1rem;
}

form button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 25px;
    bottom: 10px;
    background: white;
    color: rgb(0, 0, 0);
    border: none;
    width: 50px;
    height: 36px;
    cursor: pointer;
    font-size: 1.1rem;
}


</style>
