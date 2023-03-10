<template>
    <my-nav>
        <my-logo></my-logo>
        <h1 class="add-task">Редактирование задачи</h1>
    </my-nav>
    <my-form
    :n_id="id"
    ></my-form>
</template>
<script>
    export default{
        data(){
            return{
                id: null
            }
        },
        methods:{
            
        },
        created(){
            this.id = this.$route.params.id
        }
    }
</script>
<style scoped>
</style>