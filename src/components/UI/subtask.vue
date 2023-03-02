<template>
    <div class="subtask-container" v-show="show">
        <p class="fieldset-content__subtask">Введите подзадачу</p>
        <input type="text" class="input"  v-model="content" :id="id">
    </div>
</template>
<script>
    export default{
        props: {
            show: {
                type: Boolean,
                default: true
            },
            value: {
                type: String,
                default: ''
            },
            id: {
                type: Number,
                default: 0
            }
        },
        data(){
            return{
                content: this.value
            }
        },
        name: 'my-subtask',
        watch: {
        content(newValue) {
            this.$emit('input', newValue);
        }
    }
        
    }
</script>
<style lang="scss" scoped>
    .subtask-container {
        display: flex;
        flex-direction: column;
        justify-content: left;

    }
    .fieldset-content__subtask {
        text-align: left;
        color: white;
        font-size: 20px;
    }
    .input {
        width: 521px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid #7C66B9;
        border-radius: 14px;
        font-size: 24px;
        font-family: 'Montserrat-Medium';
        transition: all .2s;
        padding: 0 20px;
        box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.15);
        &:focus {
            outline: 5px solid #7C66B9;
        }
    }
</style>