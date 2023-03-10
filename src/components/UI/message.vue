<template>
    <div class="message-container">
        {{ message }}
    </div>
</template>
<script>
    export default{
        props: {
            message: {
                type: String,
                required: true,
            },
        },
        data() {
        },
        name: 'my-message'
    }
</script>
<style lang="scss" scoped>
.message-container{
    width: 200px;
    min-height: 100px;
    margin: 20px;
    padding: 10px;
    background: linear-gradient(268.16deg, #8AF3BF 8.7%, #6BE9A9 98.44%);
    box-shadow: 0px 10px 10px 1px rgba(102, 185, 110, 0.3);
    font-size: 24px;
    font-family: 'Montserrat-Regular';
    border-radius: 15px;
    word-wrap: break-word;
}
// #green button {
//     background: linear-gradient(268.16deg, #8AF3BF 8.7%, #6BE9A9 98.44%);
//     box-shadow: 0px 10px 10px 1px rgba(102, 185, 110, 0.3);
// }
// #green button a {
//     color: black;
// }
// #green div {
//     background: #66B96E;
// }
</style>