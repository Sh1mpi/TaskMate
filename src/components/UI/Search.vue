<template>
    <div>
      <img src="@/assets/magnifier.svg" alt="">
      <input type="text" v-model="inputValue" @input="updateParent" disabled>
    </div>
  </template>
  
  <script>
  export default {
    name: 'my-search',
    data(){
        return {
            inputValue: ''
        }
    },
    methods: {
        updateParent() {
           this.$store.commit('updateSearch', this.inputValue)
        }
    }
  };
  </script>
<style lang="scss" scoped>
    div {
        position: relative;
        max-width: 668px;
        display: flex;
        align-items: center;
    }

    input {
        width: 100px;
        height: 36px;
        border-radius: 18px;
        border: 1px solid #7C66B9;
        font-size: 24px;
        font-family: 'Montserrat-Medium';
        padding-left: 50px;
        transition: all .5s;
        cursor:not-allowed;
        &:hover {
            // border: 2px solid #7C66B9;
            width: 110px;
            // height: 40px;
            background: rgba($color: #a6a6a6, $alpha: .1);

        }
    }
    @media (min-width: 750px) {
        input {
            width: 250px;
            &:hover {
                width: 270px;
            }
        }
    }
    @media (min-width: 1200px) {
        input {
            width: 600px;
            &:hover {
                width: 668px;
            }
        }
    }
    img {
        position: absolute;
        left: 10px;
    }
</style>