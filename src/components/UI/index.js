import logo from '@/components/UI/logo.vue'
import search from '@/components/UI/Search.vue'
import task from '@/components/Task.vue'
import button from '@/components/UI/myButton.vue'

export default [
    logo,search,task,button
]

function add(){
    let button = document.getElementsByClassName("btn_first")
    button.style.paddingTop = '5px'
}