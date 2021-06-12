<template>
<div class="main">
    <header>
        <!-- <label for="check"> -->
            <span id="menu-btn" style="cursor:pointer;" class="fas fa-bars" @click="toggleMenu()"></span>
        <!-- </label> -->
        <div class="logo">
            <img src="../../../src/assets/keeplogo.png" style="height:38px" alt="not" />
            <span class="logo-brand">Fundoo</span>
        </div>

        <div class="input-box">
            <div class="search-box">
                <input class="search-note" type="search" id="search" placeholder="Search.." />
            </div>
        </div>
        <div class="usericon">
            <span class="las la-user-circle"></span>
        </div>
        <hr>
    </header>
    <div class="sidebar-menu" @click="toggleMenu()">
        <ul>
            <a href=""><span class="lar la-lightbulb"></span>
                <span>Notes</span></a>

            <a href=""><span class="las la-bell"></span>
                <span>Reminders</span></a>

            <a href=""><span class="las la-pen"></span>
                <span>Edit Labels</span></a>

            <a href=""><span class="las la-archive"></span>
                <span>Archive</span></a>

            <a href=""><span class="las la-box"></span>
                <span>Bin</span></a>
        </ul>
    </div>
    <Createnote />
</div>
</template>

<script>
import Createnote from '../pages/Createnote.vue'
export default {
    components: {
        Createnote
    },
    data(){},
    methods:{
        toggleMenu(){
            document.getElementById("sidebar-menu").classList.toggle("active");
        },
    }
}
</script>

<style scoped lang="scss">
@import "@/SCSS/Dashboard.scss";
</style>
