<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    urlList: Array
  },
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.urlList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        console.log(page)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    }
  }

}
</script>
<!--scoped css只在本组件生效-->
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    overflow hidden
    height 4rem
    margin-top .1rem
    //padding-bottom 50%
    .icon
      overflow hidden
      float left
      width 25%
      height 50%
      .icon-desc
        text-align center
        color $darkTextColor
        margin .1rem
        ellipsis()
        //margin-top -.34rem
      .icon-img
        padding .1rem

        .img-content
          width 80%
          display block
          margin:0 auto;

  /*
  .icons
    overflow hidden
    height 4rem
    padding-bottom 50%

    .icon
      overflow hidden
      float left
      position relative
      width 25%
      padding-bottom 25%
      .icon-desc
        position  absolute
        left 0
        right 0
        bottom 0
        height .44rem
        text-align center
        color $darkTextColor
      .icon-img
          position absolute
          left 0
          right 0
          top 0
          bottom .44rem
          box-sizing border-box
          padding 0.1rem
          .img-content
            height 100%
            display block
            margin 0 auto*/

</style>
