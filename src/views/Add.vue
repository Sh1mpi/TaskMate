<template>
    <my-nav>
        <my-logo></my-logo>
        <h1 class="add-task">Добавление задачи</h1>
    </my-nav>
    <my-form></my-form>
</template>
<script>
    export default{
        
    }
</script>
<style lang="scss">
.add-task {
    margin: 0;
    font-size: 1.2rem;
}
@media (min-width: 750px) {
    .add-task {
        font-size: 2rem;
    }
}

</style>