<template>
    <form action="">
        <div class="fieldset">
            <div class="form-background">
                <a href="/">
                    <img src="@/assets/exit.svg" alt="" class="exit">
                </a>
            </div>
            <div class="fieldset-content">
                <p class="fieldset-content__name">Введите название</p>
                <my-input></my-input>
                <div class="fieldset-content__subtasks">
                    <p class="fieldset-content__subtask">Введите подзадачу</p>
                    <my-input></my-input>
                    <p class="fieldset-content__subtask">Введите подзадачу</p>
                    <my-input></my-input>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
    export default{
        name: 'my-form'
    }
</script>
<style lang="scss" scoped>
form {
    margin-top: 100px;
    border: none;
}
.fieldset {
    width: 668px;
    min-height: 653px;
    background: linear-gradient(260.83deg, #414567 6.38%, #414669 102.61%);
    border-radius: 28px;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 50px;
    position: relative;
    overflow: hidden;
}
.fieldset-content {
    margin-top: 200px;
    margin-left: 55px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & .fieldset-content__subtasks {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    & .fieldset-content__name {
        text-align: left;
        color: white;
        font-size: 24px;
    }
    & .fieldset-content__subtask {
        text-align: left;
        color: white;
        font-size: 20px;
    }
}
.form-background {
    width: 834px;
    height: 210px;
    border-radius: 50%;
    position: absolute;
	top: -100px;
    left: -83px;
	margin: 0 auto;
    background: #F9F7FA;
    & .exit {
        position: absolute;
        top: 120px;
        right: 100px;
    }
}
</style>