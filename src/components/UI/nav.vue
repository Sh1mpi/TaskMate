<template>
    <div class="nav">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'my-nav'
    }
</script>
<style scoped>
.nav {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 46px auto;
  width: 1200px;
  min-height: 36px;
}
</style>