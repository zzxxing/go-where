<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont up-icon">&#xe624;</div>
    </div>

      <input class="iconfont header-input" placeholder="输入城市/景点/游玩主题">

    <router-link to="/city">
      <div class="header-right" >
        {{city}}
        <span class="iconfont down-icon">&#xe64a;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  },
  data () {
    return {

    }
  },
  methods: {
    link1 () {
      alert(111)
      this.$router.push({ name: 'City' })
    }
  }
}
</script>
<!--scoped css只在本组件生效-->
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    line-height: .86rem
    display:flex
    background-color $bgColor
    color: white

  .header-left
    width :.64rem
    float :left

  .up-icon
        text-align :center
        font-size :.4rem

  .header-input
    width :70%
    height .62rem
    line-height .62rem
    margin-top:.12rem
    padding-left :.3rem
    background-color :#ffffff
    color #ccc
    border-radius  .1rem

  .header-right
    color :#ffffff
    width :1.24rem
    float :right
    text-align center
    .down-icon
        font-size .24rem
        margin-left -0.02rem
    //text-align:center;

</style>
