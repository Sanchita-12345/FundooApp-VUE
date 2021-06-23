<template>
<div class="overlay" v-if="flag==false">
<div class="updatecard-notes" v-if="flag==false">
    <form class="updatecard-container" @submit.prevent autocomplete="off" id="update-id">
        <input name="title" id="name-in" v-model="title" placeholder="Title" autocomplete="off" />
        <textarea name="content" id="text-in" v-model="description" placeholder="Take a note..." autocomplete="off"></textarea>
        <Icon />
        <button @click="handleSubmit(); flip();" type="submit">Close</button>
    </form>
</div>
</div>
</template>

<script>
import service from '../../service/User'
import Icon from '../../components/pages/Icon.vue'
export default {
    // name: 'Updatenote',
    components: {
        Icon
    },
    props:['cardId', 'cardContent'],
    data() {
        return {
            title: '',
            description: '',
            flag: false,
        }
    },
    created(){
        this.title = this.cardContent.title;
        this.description = this.cardContent.description;
    },
    methods: {
        flip(){
            this.flag = !this.flag;
        },
        async handleSubmit() {
            let userData ={
                id: this.cardId,
                title: this.title,
                description: this.description
            }
            service.userUpdateNote(userData).then(response => {
                alert("note updated successfully");
                return response;
            }).catch(error =>{
                alert("error...!!!");
                return error;
            })
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/Updatenote.scss";
</style>
