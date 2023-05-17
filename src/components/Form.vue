<template>
    <div class="messages">
        <transition-group name="fade2">
            <my-message v-for="(message,index) in messages" :key="index" :message="message"></my-message>
        </transition-group>
    </div>
    <form @submit.prevent>
        <div class="fieldset">
            <div class="form-background">
                <router-link to="/" class="exit">
                    <img src="@/assets/exit.svg" alt="">
                </router-link>
            </div>
            <div class="form-content">
                <div class="fieldset-content">
                    <p class="fieldset-content__name">Введите название</p>
                    <input type="text" v-model="title" class="input" ref="titleInput">
                        <div class="fieldset-content__subtasks">
                            <transition-group name="fade">
                                <my-subtask v-for="subtask in subtasks" :key="subtask.id" :value="subtask.content" :id="subtask.id" @input="update(subtask.id,$event.target.value)"></my-subtask>
                            </transition-group>
                        </div>
                </div>
                <div class="btns">
                    <my-button @click="addSubtask"><span>Добавить подзадачу</span></my-button>
                    <my-button v-bind:id="'green'" @click.prevent="save">Сохранить</my-button>
                </div>
            </div>
        </div>

    </form>
</template>
<script>
    export default{
        name: 'my-form',
        props: {
            n_id: Number
        },
        data() {
            return {
                new_id:this.n_id || 0, 
                id: 0,
                title: '',
                subtasks: [],
                messages: [],
            }
        },
        mounted(){
            // placeholders
            if (this.new_id != 0){
                let ts = this.$store.state.tasks
                for(let i =0;i<ts.length;i++){
                    if(ts[i].id === this.new_id){
                        let title = this.$refs.titleInput;
                        title.placeholder = ts[i].title
                        console.log(ts[i].subtasks);
                        let count = 0
                        while(count < ts[i].subtasks.length){
                            console.log('kek');
                            count+=1
                        }
                        // for(let i = 0;i<ts[i].subtasks.length;i++){
                        //     console.log(i);
                        // }
                    }
                }
            }
        },
        methods: {
            update(index, value) {
                this.subtasks[index-1].content = value;
            },
            addSubtask() {
                this.subtasks.push({
                    id: this.subtasks.length + 1,
                    show: false,
                    content: ''
                });
            },
            save() {
                if (this.title.trim() === '') {
                    // Title is empty, return early without saving
                    let message = `заполните название задачи`;
                    this.messages.push(message);
                    setTimeout(() => {
                        this.messages.pop();
                    }, 3000);
                    return;
                }
                let indexesToDelete = []
                for (let i = 0; i < this.subtasks.length; i++) {
                    if (this.subtasks[i].content === '') {
                        indexesToDelete.push(i)
                    }
                }
                for (let i = indexesToDelete.length - 1; i >= 0; i--) {
                    this.subtasks.splice(indexesToDelete[i], 1)
                }
                this.id = Math.random().toString(36);
                let output = {
                    id: this.id,
                    title: this.title,
                    subtasks: this.subtasks,
                }
                if (this.new_id ==0){
                    this.$store.commit('updateValue', output)
                }
                else{
                    let ts = this.$store.state.tasks
                    for(let i =0;i<ts.length;i++){
                        if(ts[i].id === this.new_id){
                            ts[i] = output
                            break
                        }
                    }
                    
                }

                let message = `задача '${this.title}' сохранена`;
                this.messages.push(message);
                setTimeout(() => {
                    this.messages.pop();
                }, 3000);

            },
        },
    }
</script>
<style lang="scss" scoped>
form {
    margin: 100px 5px;
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

.fade2-move, /* apply transition to moving elements */
.fade2-enter-active,
.fade2-leave-active {
  transition: all .4s ease;
}

.fade2-enter-from,
.fade2-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.form-content{
    padding: 0 10px;
}
.input {
        // max-width: 521px;
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
    max-width: 668px;
    min-height: 453px;
    background: linear-gradient(260.83deg, #414567 6.38%, #414669 102.61%);
    border-radius: 28px;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 50px;
    position: relative;
    overflow: hidden;
}
.fieldset-content {
    margin-top: 100px;
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
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
}

@media (min-width: 650px) {
    .form-content {
        padding: 0 40px;
    }
}

.form-background {
    width: 100%;
    height: 80px;
    border-radius: 0 0 50% 50%;
    position: absolute;
    margin: 0 auto;
    background: #F9F7FA;
    & .exit {
        position: absolute;
        top: 10px;
        right: 10%;
    }
}
.messages {
    position: fixed;
    top: 0;
    right: 0;
}
</style>