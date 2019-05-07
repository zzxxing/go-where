<template>
  <ul class="list">
    <li class="item" v-for="(zzx,key) in cities" :key="key" @click="onclickcity">{{key}}</li>

  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  methods: {
    onclickcity (z) {
      this.$emit('change', z.target.innerText)
      /* console.log(z.target.innerText) */
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction  column
    justify-content center
    position absolute
    right 0
    top 1.78rem
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor

</style>
