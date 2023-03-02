<template>
    <my-nav>
        <my-logo></my-logo>
        <h1 class="add-task">Добавление задачи</h1>
    </my-nav>
    <my-form @new-title="title = $event"></my-form>
    <p>{{ title }}</p>
    <p>{{ subtasks }}</p>
    <p>{{ value }}</p>
</template>
<script>
    export default{
        data() {
            return {
                title: '',
                subtasks: '',
                value: '',
            }
        },
        
    }
</script>
<style scoped>
.add-task {
    margin: 0;
}

</style>