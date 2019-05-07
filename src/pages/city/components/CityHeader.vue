<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont up-icon">&#xe624;</div>
    </div>
    <div class="title">城市选择</div>

  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display flex
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color white
    background $bgColor
    .header-left
      width :.64rem
      float :left
    .title
      width 3rem
      margin-left 23%
</style>
