<template>
  <router-view/>
</template>

<style lang="scss">
@font-face {
  font-family: 'Montserrat-SemiBold';
  src: url('@/fonts/Montserrat-SemiBold.ttf');
}

@font-face {
  font-family: 'Montserrat-Medium';
  src: url('@/fonts/Montserrat-Medium.ttf');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-image: url('@/assets/background.svg');
  margin:0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
