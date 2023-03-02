<template>
    <my-nav>
        <my-logo></my-logo>
        <h1 class="add-task">Добавление задачи</h1>
    </my-nav>
    <my-form @new-title="task = $event"></my-form>
    <p>{{ task }}</p>
</template>
<script>
    export default{
        data() {
            return {
                task: '',
            }
        },
        
    }
</script>
<style scoped>
.add-task {
    margin: 0;
}

</style>