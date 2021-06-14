<template>
<div class="main">
    <header>
        <div class="logo">
            <span id="menu-btn" style="cursor:pointer;" class="fas fa-bars" @click="myFunction()"></span>

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
    <div class="sidebar-menu" id="side">
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
        myFunction() {
            var x = document.getElementById("side");
            if (x.style.display === "none") {
            x.style.display = "block";
            } 
            else {
                x.style.display = "none";
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/SCSS/Dashboard.scss";
</style>
