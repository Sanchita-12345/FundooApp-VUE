<template>
<div class="sidebar">
    <!-- <input type="checkbox" id="openSidebarMenu"> -->
    <!-- <label for="openSidebarMenu" class="sidebarIconToggle"></label> -->
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png" alt="not" />
            <span class="navbar-brand">Fundoo</span>
            <input type="text" placeholder="Search..">
            <div class="listview">
                <span class="las la-list"></span>
            </div>
            <!-- <div class="inbox">
                    <form>
                        <input type="text" placeholder="Title" name="title"/>
                        <p>
                            <textarea name="content" placeholder="Take a note"></textarea>
                        </p>
                        <button type="submit">Add</button>
                    </form>
                </div> -->
        </div>

        <div class="usericon">
            <span class="fas fa-user-circle"></span>
        </div>
    </nav>

</div>
</template>

<script src="C:\Users\sanch\Desktop\8\fundooapp\src\components\Hidebar.js">
</script>

<style scoped src="C:\Users\sanch\Desktop\8\fundooapp\src\styles\Dashboard.css">

</style>
