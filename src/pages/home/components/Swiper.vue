<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgurl" alt="">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true, // 可无限循环
        autoplay: 3000 // 自动轮播
        // grabCursor: true
      },
      swiperList: [
        {
          id: 1,
          imgurl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/b67b8e466eb2625f6d3141c1a7510c94.jpg_890x330_0aa64222.jpg'
        },
        {
          id: 2,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1510/a9/9ab526588c4282.jpg_890x330_f0c3609b.jpg'
        },
        {
          id: 3,
          imgurl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/b67b8e466eb2625f6d3141c1a7510c94.jpg_890x330_0aa64222.jpg'
        },
        {
          id: 4,
          imgurl: '//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg'
        }
      ]

    }
  }
}
</script>
<!--scoped css只在本组件生效-->
<style lang="stylus" scoped>
   .swiper >>> .swiper-pagination-bullet-active
     background-color #ffffff
  .swiper
    overflow hidden
    width 100%
    height 0
    padding-bottom 35.25%
  .swiper-img
    width:100%
    height :2.5rem
</style>
