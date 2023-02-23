import logo from '@/components/UI/logo.vue'
import search from '@/components/UI/Search.vue'
import task from '@/components/Task.vue'
import form from '@/components/Form.vue'
import button from '@/components/UI/myButton.vue'
import nav from '@/components/UI/nav.vue'
import input from '@/components/UI/input.vue'

export default [
    logo,search,task,button,nav,form,input
]

function add(){
    let button = document.getElementsByClassName("btn_first")
    button.style.paddingTop = '5px'
}