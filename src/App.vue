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

@font-face {
  font-family: 'Montserrat-Regular';
  src: url('@/fonts/Montserrat-Regular.ttf');
}

#app {
  font-family: Montserrat,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

// * {
//   outline: 1px solid red;
// }
</style>

