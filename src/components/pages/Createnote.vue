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
            <input name="title" id="name-in" v-model="title" placeholder="Title" autocomplete="off" />
            <textarea name="content" id="text-in" v-model="description" placeholder="Take a note..." autocomplete="off"></textarea>
            <Icon />
            <button v-on:click="myAllFunction()" type="submit">Close</button>
        </form>
    </div>
    <Getnote v-if="flag==true" />
</div>
</template>

<script>
import service from '../../service/User'
import Icon from '../../components/pages/Icon.vue'
import Getnote from './Getnote.vue'
export default {
    name: 'Createnote',
    components: {
        Icon,
        Getnote
    },
    data() {
        return {
            visibleNote: false,
            flag: true,
            title: '',
            description: ''
        }
    },
    methods: {
        myAllFunction() {
            this.flip() + this.handleSubmit()
        },
        flip() {
            this.flag = !this.flag;
        },
        async handleSubmit() {
            let userData = {
                title: this.title,
                description: this.description
            }
            service.userCreateNote(userData).then(response => {
                console.log("note created", response);
                localStorage.getItem('token', response.data.token);
                alert("create note successfully..");
                this.title = "";
                this.description = "";
            }).catch(error => {
                alert("error...!!!");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/Createnote.scss";
</style>
