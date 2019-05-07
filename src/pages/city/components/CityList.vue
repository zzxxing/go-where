<template>
  <div class="List" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          所在城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">青岛</div>
          </div>

        </div>
      </div>
      <div class="area ">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper" v-for="zzx in hot" :key="zzx.id">
            <div class="button">{{zzx.name}}</div>
          </div>

        </div>
      </div>
      <div class="area" v-for="(zzx,index) of cities" :key="index" :ref="index">
        <div class="title border-topbottom"  >
          {{index}}
        </div>
        <div class="item-list" v-for="zz in zzx" :key="zz.id">
          <div class="item border-bottom">
            {{zz.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    hot: Array,
    cities: Object,
    city: String
  },
  watch: {
    city () {
      if (this.city) {
        const element = this.$refs[this.city][0]
        console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .border-bottom
    &:before
      border-color #cccccc
  .List
    overflow hidden
    position absolute
    top 1.69rem
    right 0
    bottom 0
    left 0

    .title
      height .5rem
      line-height .5rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.3%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .1rem
    .item
      line-height .7rem
      color #666
      padding-left .2rem

</style>
