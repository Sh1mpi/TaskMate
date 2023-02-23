<template>
    <input type="text">
</template>
<script>
    export default{
        name: 'my-input'
    }
</script>
<style lang="scss" scoped>

    input {
        width: 541px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid #7C66B9;
        border-radius: 14px;
        font-size: 24px;
        font-family: 'Montserrat-Medium';
        transition: all .2s;
        padding-left: 20px;
        &:focus {
            outline: none;
            border: 5px solid #7C66B9;
        }
    }

</style>