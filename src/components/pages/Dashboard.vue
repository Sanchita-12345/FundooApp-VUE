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

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    /* font-family: 'Poppins', sans-serif; */
}

.sidebar {
    width: 300px;
    position: fixed;
    left: 0;
    right: 0;
    height: 100%;
    /* background: fuchsia; */
    z-index: 100;
}

.sidebar-menu {
    margin-top: 90px;
    width: 345px;
    position: fixed;
    left: 0;
    right: 0;
    height: 100%;
    /* transform: translateX(-345px); */
    /* background-color: hotpink; */
}

/* #openSidebarMenu:checked ~ #sidebar-menu{
    transform: translateX(0px);
} */

.main-content {
    margin-left: 130px;
    position: absolute;
    margin-bottom: 250px;
}

.sidebar-menu li {
    width: 100%;
    margin-bottom: 1.7rem;
    padding-left: 1rem;
}

.sidebar-menu {
    padding-left: 1rem;
    display: block;
    color: rgb(10, 10, 10);
    font-size: 1.1rem;
}

.sidebar-menu span:first-child {
    font-size: 1.5rem;
    padding-right: 1rem;
}

header {
    width: 100%;
    margin-bottom: 1.7rem;
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 1.3rem;
    /* box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3); */
    position: fixed;
    left: 80px;
    /* width: calc(100%-345px); */
    top: 0;
    z-index: 10;
}

#nav-toggle:checked+.sidebar {
    width: 50px;
}

/* header label span {
    font-size: 1.7rem;
    padding-right: 1rem;
} */

main {
    margin-top: 90px;
    padding: 2rem 1.5rem;
    background: #f0f0f0;
    min-height: calc(100vh - 90px);
}

.main-content .la-bars {
    font-size: 30px;
    margin-left: -90px;
    margin-top: 25px;
}

.usericon .fa-user-circle {
    /* margin-left: 1000px; */
    /* padding-left: 200px; */
    margin-top: 25px;
    margin-bottom: 28%;

    font-size: 30px;
    /* margin-bottom: 100px; */
    /* position: fixed; */
    float: right;
}

.sidebarIconToggle {
    background: wheat;
    width: 22px;
    height: 22px;
    position: absolute;
    z-index: 20;
    top: 22px;
    left: 15px;
    cursor: pointer;
}

img {
    margin-left: 90px;
    width: 35px;
    height: 45px;
}

.navbar-brand {
    margin-left: 15px;
    font-size: 25px;
    margin-top: 10px;
}

.navbar-header input {
    float: right;
    padding: 6px;
    border: none;
    margin-top: -45px;
    margin-left: 350px;
    margin-right: 50px;
    font-size: 17px;
    background-color: rgb(231, 229, 229);
    border-radius: 10px;
}

.listview .la-list {
    margin-left: 1000px;
    padding-left: 200px;
    margin-top: -30px;
    font-size: 30px;
    margin-bottom: 100px;
    position: fixed;
}

input {
    outline: none;
    border: 1px solid #9c9c9c;
    border-radius: 5px;
    padding: 0 10px;
    height: 50px;
    font-size: 15px;
    margin-left: 224px;
    width: 733px;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    background: #ffffff;
}

form {
    position: relative;
    width: 600px;
    margin: 32px auto 50px auto;
    background: #fff;
    padding: 7px;
    border-radius: 7px;
    box-shadow: 0 1px 7px rgb(128, 128, 128);
    margin-top: 100px;
    margin-left: 250px;
}

form input {
    width: 70%;
    border: none;
    padding: 4px 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    outline: none;
    font-size: 1rem;
    resize: none;
}

form textarea {
    width: 100%;
    border: none;
    padding: 4px 10px;
    outline: none;
    font-size: 1rem;
    resize: none;
}

form button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 18px;
    bottom: -18px;
    background: rgb(245, 189, 7);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgb(165, 165, 165);
    cursor: pointer;
    outline: none;
}
</style>
