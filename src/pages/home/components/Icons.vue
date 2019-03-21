<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="img-content" :src="item.imgurl" alt="">
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

  data () {
    return {
      swiperOption: {},
      urlList: [
        {
          id: 1,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: 2,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: 3,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '青岛必游'
        },
        {
          id: 4,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '游乐场'
        },
        {
          id: 5,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '踏青赏花'
        },
        {
          id: 6,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: '海洋馆'
        },
        {
          id: 7,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          desc: '城市观光'
        },
        {
          id: 8,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          desc: '博物馆'
        },
        {
          id: 9,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '名胜古迹'
        },
        {
          id: 10,
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '溜娃'
        }

      ]
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
  .icons
    overflow hidden
    height 4rem
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
