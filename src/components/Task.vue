<template>
    <div class="task" v-for="task in tasks">
            <!-- <div>{{ task.id }}</div> -->
            <div class="title"><input type="checkbox" id="task"/><label for="task"><span></span></label><strong>{{ task.title }}</strong></div>
            <div>
                <strong>Дата создания:</strong>{{ new Date().toLocaleString().split(',')[0] }}
            </div>
            <div v-for="subtask in task.subtask">
                <input type="checkbox"/> {{ subtask }}
            </div>
    </div>
</template>
<script>
    export default{
        name: 'task-item',
        data(){
            return{
                tasks: [
                    {id:1,title:'lorem ipsum1',subtask:['1']},
                    {id:2,title:'lorem ipsum2',subtask:['1','2']},
                    {id:3,title:'lorem ipsum3',subtask:['1','2','3']},
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
    height: 250px;
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
    &~div{
        margin-left: 20px;
    }
    & input {
        display: none;
        z-index: -1;
    }
    & label {
        width: 50px;
        height: 42.86px;
        background: #B799EC;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    & label span {
        width: 28.57px;
        height: 28.57px;
        border: 2px solid #FFFFFF;
        border-radius: 100px;
    }
}

</style>