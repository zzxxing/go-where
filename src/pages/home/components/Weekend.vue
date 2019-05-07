<!--suppress ALL -->
<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-wapper">
          <img class="item-img"  :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekendList: Array
  },
  data () {
    return {

    }
  }
}
</script>
<!--scoped css只在本组件生效-->
<style lang="stylus" scoped>

  @import "~styles/mixins.styl"
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background-color #ccc
    text-indent .2rem
  .item-wapper
    overflow hidden
    height 0
    padding-bottom 33.9%
  .item-img
    width 100%
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

</style>
