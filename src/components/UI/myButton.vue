<template>
    <div class="btn">
        <button class="btn_first" @click="add">
            <slot></slot>
        </button>
        <div class="btn_back"></div>
    </div>
</template>
<script>
    export default{
        name: 'my-button',
        methods: {
            add(event) {
                let button = document.querySelector('.btn_first')
                console.log(button.style);
                button.style.animationName = 'anim'
                button.style.animationDuration = '.3s'
                button.style.animationIterationCount = '1'

            }
        }
    }
    
</script>
<style scoped lang="scss">

.btn {
    display: inline-flex;
    position: relative;
    min-height: 47px;
    & button {
    font-size: 24px;
    font-family: 'Montserrat-Regular';
    background: linear-gradient(268.16deg, #DECAFD 8.7%, #DDCAFD 98.44%);
    box-shadow: 0px 10px 10px 1px rgba(124, 102, 185, 0.3);
    border-radius: 15px;
    border: 0px;
    padding: 0 20px;
    z-index: 1;
    // animation: anim .3s 1 linear;
    }
    & .btn_back {
    width: 100%;
    height: 30px;
    position: absolute;
    background: #7C66B9;
    border-radius: 15px;
    margin-top: 22px;
    }
}
@keyframes anim {
    50% {
        transform: translateY(6px);
    }
    100% {
        transform: translateY(0);
    }
}
    
</style>