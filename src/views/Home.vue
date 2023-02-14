<template>
  <div class="nav">
    <my-logo></my-logo>
    <my-input></my-input>
  </div>
  <my-button class="">
    <a href="#">Добавить задачу</a>
  </my-button>
  <task-item></task-item>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>
<style lang="scss">
.nav {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 46px auto;
  width: 1200px;
}
a{
  text-decoration: none;
}
</style>