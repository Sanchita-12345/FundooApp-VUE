<template>
<div class="sidebar">
    <div class="main-content">
        <header>
            <h1>
                <label for="nav-toggle">
                    <span class="las la-bars" @click="toggleMenu(this)"></span>
                </label>
            </h1>
        </header>
    </div>
    <div class="sidebar-menu">
        <ul>
            <li>
                <span class="lar la-lightbulb"></span>
                <span>Notes</span>
            </li>
            <li>
                <span class="las la-bell"></span>
                <span>Reminder</span>
            </li>
            <li>
                <span class="las la-pen"></span>
                <span>Edit Lebels</span>
            </li>
            <li>
                <span class="las la-archive"></span>
                <span>Archive</span>
            </li>
            <li>
                <span class="las la-box"></span>
                <span>Bin</span>
            </li>
        </ul>
    </div>

    <nav class="navbar navbar-default">
        <div class="navbar-header">
            <img src="../../../src/assets/keeplogo.png" alt="not" />
            <span class="navbar-brand">Fundoo</span>
            <input type="text" placeholder="Search..">
            <div class="listview">
                <span class="las la-user-circle"></span>
            </div>
        </div>
    </nav>
</div>
</template>

<style scoped lang="scss">

@import "@/SCSS/Dashboard.scss";
</style>
