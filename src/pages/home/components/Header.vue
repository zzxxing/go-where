<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<!--scoped css只在本组件生效-->
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    line-height: .86rem;
    display:flex;
    background-color $bgColor;
    color: white

  .header-left
    width :.84rem;
    float :left;

  .header-input
    flex :1;
    height .62rem
    line-height .62rem
    margin-top:.12rem;
    background-color :#ffffff;
    color #ccc
    border-radius  .1rem

  .header-right
    width :1.24rem;
    float :right;
    //text-align:center;

</style>
