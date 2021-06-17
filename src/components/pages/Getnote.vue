<template>
<div class="carddisplay-notes">
    <div class="carddisplay-container" v-for="note in notes" :key="note.data">
        <div class="carddisplay">
            <h3>{{note.title}}</h3>
            <p>{{note.description}}</p>
        </div>
        <div class="carddisplay-icons">
            <Icon />
            <button class="card-button" type="button" v-if="flag" @click="handleSubmit();ToggleButton();">Close</button>
        </div>
    </div>
</div>
</template>

<script>
import service from '../../service/User'
import Icon from '../../components/pages/Icon.vue'
export default {
    name: 'Getnote',
    components: {
        Icon
    },
    data() {
        return {
            flag: true,
            notes:[{
                id:1,
                title: 'notes',
                description: 'display notes'
            },],
        }
    },
    methods: {
        ToggleButton(){
            this.flag = !this.flag;
        },
        async handleSubmit() {
            service.userGetNote().then(response => {
                this.notes.push(...response.data);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/SCSS/Getnote.scss";
</style>
