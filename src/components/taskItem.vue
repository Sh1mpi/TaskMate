  <template>
    <div class="task" v-if="task">
      <img src="@/assets/edit.svg" alt="" class="edit" @click="$router.push(`/tasks/${task.id}`)">
      <div class="title">
        <input type="checkbox" :id="task.id" @click="check" />
        <label :for="task.id"><span></span></label>
        <strong class="title__content">{{ task.title }}</strong>
      </div>
      <div class="date">
        <strong>Дата создания:</strong>
        {{ new Date().toLocaleString().split(",")[0] }}
      </div>
      <div class="subtasks">
        <div v-for="subtask in task.subtasks" :key="subtask.id">
          <input
            type="checkbox"
            :id="'sub'+task.id + subtask.id"
            :disabled="subtask.disabled"
            @click="subCheck"
            :checked="subtaskChecked(subtask)"
            v-model="subtask.show"
          />
          <label :for="'sub'+task.id+ subtask.id"><span></span></label>
          <p>{{ subtask.content }}</p>
        </div>
      </div>
    </div>
    <div v-else>Task not found</div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: {
        type: Object,
        required: true,
      },
      check: {
      type: Function,
      required: true,
    },
      
    },
    name: "task-item",
    computed: {
      task() {
        return this.tasks || null;
      },
      subtaskChecked() {
        return function(subtask) {
          return subtask.show;
        };
      },
    },
    methods: {
      // check(event) {
      //   this.check(event);
        
      // },
      subCheck(event){
        let st = event.target.id
        let targ = ''
        st = st.split("sub").pop()
        let sub_id = Number(st.substr(st.length-1,1))
        st = st.slice(0,-1)
        let tasks = this.$store.state.tasks
        for (let i =0;i<tasks.length;i++){
          if(tasks[i].id == st) {
            targ = tasks[i]
          }
        }
        for (let i=0;i<targ.subtasks.length;i++){
          if (targ.subtasks[i].id == sub_id){
            if (targ.subtasks[i].show == true){
              targ.subtasks[i].show = false
            }
            else{
              targ.subtasks[i].show = true
            }
          }
        }
      }
      
    },
  };
  </script>
<style lang="scss">
.task{
    max-width: 668px;
    min-height: 250px;
    background: #FDFEFE;
    box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.15);
    border-radius: 28px;
    margin: 0 auto;
    margin-top: 36px;
    padding-bottom: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    position: relative;
    & .edit {
      width: 25px;
      position: absolute;
      top: 20px;
      right: 20px;
      transition: .5s;
      &:hover {
        transform: scale(.8,.8);
      }
    }
}
.title {
    margin-top: 50px;
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
    & .title__content{
      width: 300px;
      overflow-wrap: break-word;
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
    & input:checked + label + .title__content {
        text-decoration: line-through;
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
        max-width: 300px;
        word-wrap: break-word;
        @media (min-width:750px) {
          max-width: 550px;
        }
    }
    

    & label {
        min-width: 30px;
        height: 25.71px;
        flex-basis: 30px;
        border-radius: 5px;
        
    }
    & label span {
        width: 17px;
        height: 17px;
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
    & input:checked + label + p {
        text-decoration: line-through;
    }
}

.tasks {
    margin-bottom: 100px;
}
</style>