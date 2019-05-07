<template>
  <div class="search">
    <input type="text" class="input-search" placeholder="请输入城市名或者拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    padding .1rem
    background $bgColor
    .input-search
      width 100%
      height .62rem

      text-align center
      border-radius .06rem
      color #666

</style>
