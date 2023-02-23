<template>
  <div class="back">
    <my-nav>
      <my-logo></my-logo>
      <my-search></my-search>
    </my-nav>
  <my-button class="add-btn">
    <!-- <a href="#">Добавить задачу</a> -->
    <router-link to="/add" class="router">Добавить задачу</router-link>
  </my-button>
  <task-item></task-item>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
  created() {
      console.log('object');
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
}
.back {
  background-image: url('@/assets/background.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  margin:0;
  position: absolute;
  width:100%;
  top: 0;
  z-index: -1;

}

.btn_first a{
  text-decoration: none;
  color: #7c66b9;
}
.router {
  pointer-events: none;
  cursor: default;
}
</style>