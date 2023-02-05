<template>
  <div class="nav">
    <my-logo></my-logo>
    <my-input></my-input>
  </div>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 46px;
  justify-content: space-around;
}
</style>