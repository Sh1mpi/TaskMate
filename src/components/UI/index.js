import logo from '@/components/UI/logo.vue'
import search from '@/components/UI/Search.vue'
import taskList from '@/components/taskList.vue'
import taskItem from '@/components/taskItem.vue'
import form from '@/components/Form.vue'
import button from '@/components/UI/myButton.vue'
import nav from '@/components/UI/nav.vue'
import subtask from '@/components/UI/subtask.vue'
import message from '@/components/UI/message.vue'

export default [
    logo,search,taskList,taskItem,button,nav,form,subtask,message
]

function add(){
    let button = document.getElementsByClassName("btn_first")
    button.style.paddingTop = '5px'
}