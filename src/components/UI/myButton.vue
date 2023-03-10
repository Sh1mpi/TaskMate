<template>
    <div class="btn">
        <button class="btn_first" v-on:click="add">
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
                let href = event.target.getAttribute('href')
                if (href ==null){
                    try {
                        href = event.target.firstElementChild.getAttribute('href')
                        if (href == null) {
                            throw new Error('is not a link')
                        }
                        let button = event.target
                        if (button.tagName != 'BUTTON') {
                            button = button.parentElement
                        }
                        button.classList.add('btn__active')
                        setTimeout(()=>{ 
                            button.classList.remove('btn__active');
                            this.$router.push(href);
                        },300);

                    }
                    catch {
                        let button = event.target
                        if (button.tagName != 'BUTTON') {
                            button = button.parentElement
                        }
                        button.classList.add('btn__active')
                        setTimeout(()=>{ button.classList.remove('btn__active')},300);
                        event.preventDefault();
                    }
                }
            },
            
        }, 
    }
    
</script>
vue
<style scoped lang="scss">

.btn {
    display: inline-flex;
    position: relative;
    min-height: 47px;
    & .btn_first {
    font-size: 24px;
    font-family: 'Montserrat-Regular';
    background: linear-gradient(268.16deg, #DECAFD 8.7%, #DDCAFD 98.44%);
    box-shadow: 0px 10px 10px 1px rgba(124, 102, 185, 0.3);
    border-radius: 15px;
    border: 0px;
    padding: 0 20px;
    z-index: 1;
    }
    & .btn__active{
        animation: anim .3s 1 linear;
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
#green button {
    background: linear-gradient(268.16deg, #8AF3BF 8.7%, #6BE9A9 98.44%);
    box-shadow: 0px 10px 10px 1px rgba(102, 185, 110, 0.3);
}
#green button a {
    color: black;
}
#green div {
    background: #66B96E;
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