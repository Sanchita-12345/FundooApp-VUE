<template>
<div class="footer">
    <span class="las la-bell"></span>
    <span class="las la-user-plus"></span>
    <span class="las la-palette"></span>
    <span class="lar la-image"></span>
    <span class="las la-archive"></span>
    <div class="dropdown">
        <span class="las la-ellipsis-v" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <ul class="dropdown-content" aria-labelledby="dropdownMenuButton1">
                <a class="dropdown-item" @click="handleSubmit();">Delete note</a>
                <a class="dropdown-item" href="#">Add label</a>
            </ul>
        </span>
    </div>
</div>
</template>

<script>
import service from '../../service/User'
export default {
    props: ['cardId'],
    data() {
        return {
            clickedCard: '',
        }
    },
    methods: {
        async handleSubmit() {
            let userData = {
                id: this.cardId,
            }
            service.userDeleteNote(userData).then(response => {
                alert("Note is deleted succesfully...!!!");
                return response;
            }).catch(error => {
                alert("error...!!!");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/Icon.scss";
</style>
