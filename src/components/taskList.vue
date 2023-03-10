<template>
    <div class="tasks">
        <transition-group name="fade">
            <task-item class="task" :tasks="task" :check="check" :key="task.id" v-for="task in tasks"/>
        </transition-group>
    </div>
</template>
<script>
    export default{
        name: 'task-list',
        data(){
            return{
                tasks: [
                    // {id:0,title:'lorem ipsum1',subtasks:[{"id":1,"show":true,"content":'lorem ipsum lorem ipsum '},{"id":2,"show":true,"content":'kek'}]},
                ],
            }
        },
        methods:{
            check(event) {
                for(let i=0;i<this.tasks.length;i++){
                    if (this.tasks[i].id == event.target.id){
                        let del_task = this.$store.state.tasks.indexOf(this.tasks[i])
                        this.tasks.splice(i,1)
                        this.$store.state.tasks.splice(del_task,1)
                        break
                    }
                }
            }
            
        },
        computed: {
            vuexTasks(){
                return this.$store.state.tasks
            }
        },
        mounted() {
            this.tasks = [...this.tasks, ...this.vuexTasks]
            if (this.tasks.length === 0){
                this.tasks.push({id:0,title:'lorem ipsum1',subtasks:[{"id":1,"show":true,"content":'lorem ipsum lorem ipsum '},{"id":2,"show":true,"content":'kek'}]})
            }
            else {
                console.log(this.tasks);
            }
        }
    }
</script>
<style lang="scss" scoped>

.fade-move, /* apply transition to moving elements */
.fade-enter-active,
.fade-leave-active {
  transition: all .4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>