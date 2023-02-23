<template>
    <div>
        <img src="@/assets/magnifier.svg" alt="">
        <input type="text">
    </div>
</template>
<script>
    export default{
        name: 'my-search'
    }
</script>
<style lang="scss" scoped>
    div {
        position: relative;
        min-width: 668px;
        display: flex;
        align-items: center;
        margin-left: 100px;
    }

    input {
        width: 668px;
        height: 36px;
        border-radius: 18px;
        border: 1px solid #7C66B9;
        font-size: 24px;
        font-family: 'Montserrat-Medium';
        padding-left: 50px;
        transition: all .5s;
        &:focus {
            outline: none;
            width: 670px;
        }
        &:hover {
            // border: 2px solid #7C66B9;
            width: 675px;
            // height: 40px;
            background: rgba($color: #a6a6a6, $alpha: .1);

        }
    }
    img {
        position: absolute;
        left: 10px;
    }
</style>