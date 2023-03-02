<template>
    <h1 class="logo"><router-link to="/" >TaskMate</router-link></h1>
</template>
<script>
    export default{
        name: 'my-logo'
    }
</script>
<style lang="scss" scoped>
    .logo {
        font-family: 'Montserrat-SemiBold';
        font-size: 36px;
        margin: 0;
        left: 0;
        position: absolute;
        & a {
            color:#2c3e50;
            text-decoration: none;
        }
    }

</style>