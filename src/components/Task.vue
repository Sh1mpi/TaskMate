<template>
    <div class="tasks">
        <div class="task" v-for="task in tasks">
                <!-- <div>{{ task.id }}</div> -->
                <div class="title"><input type="checkbox" :id="task.id"/><label :for="task.id"><span></span></label><strong>{{ task.title }}</strong></div>
                <div class="date">
                    <strong>Дата создания:</strong>{{ new Date().toLocaleString().split(',')[0] }}
                </div>
                <div class="subtasks">
                    <div v-for="subtask in task.subtasks">
                        <input type="checkbox" :id="'sub'+task.id + task.subtasks.indexOf(subtask)"/><label :for="'sub'+task.id+ task.subtasks.indexOf(subtask)"><span></span></label><p>{{ subtask }}</p>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'task-item',
        data(){
            return{
                tasks: [
                    {id:1,title:'lorem ipsum1',subtasks:['lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum']},
                    {id:2,title:'lorem ipsum2',subtasks:['1','2']},
                    {id:3,title:'lorem ipsum3',subtasks:['1','2','3']},
                    {id:4,title:'lorem ipsum4',subtasks:['1','2','3','4']},
                ],
            }
        },
        methods:{
            
        },
        created(){
            
        }
    }
</script>
<style lang="scss" scoped>
.task{
    width: 668px;
    min-height: 250px;
    background: #FDFEFE;
    box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.15);
    border-radius: 28px;
    margin: 0 auto;
    margin-top: 36px;
    text-align: left;
    display: flex;
    flex-direction: column;
}
.title {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 24px;
    font-family: 'Montserrat-Medium';
    display: flex;
    align-items: center;
    flex-direction: row;
    &~div{
        margin-left: 20px;
    }
    & input {
        display: none;
        z-index: -1;
    }
    & label {
        min-width: 50px;
        height: 42.86px;
        background: #B799EC;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: .2s;
        position: relative;
        margin-right: 20px;
    }
    & label span {
        width: 28.57px;
        height: 28.57px;
        border: 2px solid #FFFFFF;
        border-radius: 100px;
        transition: .2s;
    }
    & input:checked + label {
        background: #7BF0B6;
        & span {
            width: 20px;
            height: 20px;
        }
        &::after {
            content: url('@/assets/accept.svg');
            position: absolute;
            transform: scale(150%);
            bottom:13px;
        }
    }
    
}
.date {
    margin-top: 10px;
}
.subtasks {
    @extend .title;
    font-size: 20px;
    font-family: 'Montserrat-Regular';
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;

    & div {
        display: flex;
        flex-direction: row;
        margin: 10px 0;
    }


    & p {
        margin: 0;
        max-width: 550px;
    }

    & label {
        min-width: 30px;
        height: 25.71px;
        flex-basis: 30px;
        border-radius: 5px;
        
    }
    & label span {
        width: 17.14px;
        height: 17.14px;
    }
    & input:checked + label {
        & span {
            width: 15px;
            height: 15px;
            // position: absolute;
        }
        &::after {
            content: url('@/assets/accept.svg');
            position: absolute;
            transform: scale(100%);
            bottom: 3px;
        }
    }
}

.tasks {
    margin-bottom: 100px;
}

</style>