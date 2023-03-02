<template>
    <form @submit.prevent>
        <div class="fieldset">
            <div class="form-background">
                <router-link to="/">
                    <img src="@/assets/exit.svg" alt="" class="exit">
                </router-link>
            </div>
            
            <div class="fieldset-content">
                <p class="fieldset-content__name">Введите название</p>
                <input type="text" v-model="title" class="input">
                    <div class="fieldset-content__subtasks">
                        <transition-group name="fade">
                            <my-subtask v-for="subtask in subtasks" :key="subtask.id" :value="subtask.content" :id="subtask.id" @input="update(subtask.id,$event.target.value)"></my-subtask>
                        </transition-group>
                    </div>
            </div>
            <div class="btns">
                <my-button @click="addSubtask"><span>Добавить подзадачу</span></my-button>
                <my-button v-bind:id="'green'" @click="save"></my-button>
            </div>
        </div>

    </form>
</template>
<script>
    export default{
        name: 'my-form',
        data() {
            return {
                title: '',
                subtasks: [],
            }
        },
        methods: {
            update(index, value) {
                this.subtasks[index-1].content = value;
            },
            addSubtask() {
                this.subtasks.push({
                    id: this.subtasks.length + 1,
                    show: true,
                    content: ''
                });
            },
            save() {
                debugger;
                let output = [this.title]
                let i = 0
                while (i < this.subtasks.length){
                    if(this.subtasks[i].content === ''){
                        this.subtasks.splice(i,1)
                    }
                    i++
                }
                this.$emit('new-title', [this.title,this.subtasks]);
                this.$store.commit('updateValue', [this.title,this.subtasks])
            }
        },
    }
</script>
<style lang="scss" scoped>
form {
    margin: 100px 0;
    border: none;
}
.fade-move, /* apply transition to moving elements */
.fade-enter-active,
.fade-leave-active {
  transition: all .4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
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
.fieldset {
    width: 668px;
    min-height: 653px;
    background: linear-gradient(260.83deg, #414567 6.38%, #414669 102.61%);
    border-radius: 28px;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 50px;
    position: relative;
    overflow: hidden;
}
.fieldset-content {
    margin-top: 200px;
    margin-left: 55px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & .fieldset-content__subtasks {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    & .fieldset-content__name {
        text-align: left;
        color: white;
        font-size: 24px;
    }
}
.btns {
        margin-top: 110px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        // & .green::v-deep button {
        //     background: linear-gradient(268.16deg, #8AF3BF 8.7%, #6BE9A9 98.44%);
        //     box-shadow: 0px 10px 10px 1px rgba(102, 185, 110, 0.3);
        //     & a{
        //         color: black;
        //     }
        // }
        // & .green::v-deep div {
        //     background: #66B96E;
        // }
        & .green-link {
            color: black;
        }
}

.form-background {
    width: 834px;
    height: 210px;
    border-radius: 50%;
    position: absolute;
    top: -100px;
    left: -83px;
    margin: 0 auto;
    background: #F9F7FA;
    & .exit {
        position: absolute;
        top: 120px;
        right: 100px;
    }
}
</style>