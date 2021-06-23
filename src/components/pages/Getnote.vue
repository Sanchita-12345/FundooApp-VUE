<template>
<div class="carddisplay-notes">
    <div class="carddisplay-container" v-for="note in notes" :key="note.id">
        <div class="carddisplay" @click="togglePopup(note.id)">
            <h3>{{note.title}}</h3>
            <p>{{note.description}}</p>
        </div>
        <div class="carddisplay-icons">
            <Icon :cardId="note.id" />
            <button class="card-button" type="button" v-if="flag" @click="handleSubmit();ToggleButton();">Close</button>
        </div>
    </div>
    <div class="cardupdate-popup" id="popup">
        <Updatenote :cardId="clickedCard" :cardContent="cardContent" />
    </div>
</div>
</template>

<script>
import service from '../../service/User'
import Icon from '../../components/pages/Icon.vue'
import Updatenote from '../../components/pages/Updatenote.vue'
export default {
    name: 'Getnote',
    components: {
        Icon, Updatenote
    },
    data() {
        return {
            flag: true,
            notes:[{
                id:1,
                title: 'notes',
                description: 'display notes'
            },],
            clickedCard: '',
            cardContent: {},
        }
    },
    methods: {
        ToggleButton(){
            this.flag = !this.flag;
        },
        async handleSubmit() {
            service.userGetNote().then(response => {
                console.log("user data",response);
                this.notes.push(...response.data);
            })
        },
        togglePopup(id){
            var popup=document.getElementById('popup');
            popup.classList.toggle('active');
            this.clickedCard = id;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/Getnote.scss";
</style>
