<template>
  <div class="back">
    <my-nav>
      <my-logo></my-logo>
      <my-search></my-search>
    </my-nav>
  <my-button>
    <router-link to="/add" class="router">Добавить задачу</router-link>
  </my-button>
  <!-- <h1>{{ tasks }}</h1> -->
  <task-list :tasks="sortedAndSearchedTasks"></task-list>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  
  data(){
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['search']),
    sortedAndSearchedTasks() {
  }

}
}
</script>
<style lang="scss">
body {
  margin: 0;
}
.back {
  background-image: url('@/assets/background.svg');
  background-size: cover;
  margin:0;
  position: absolute;
  width:100%;
  min-height: 100vh;
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