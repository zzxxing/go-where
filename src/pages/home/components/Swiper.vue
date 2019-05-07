<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="showswiper">
      <swiper-slide v-for="item of this.swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true, // 可无限循环
        autoplay: 3000 // 自动轮播
        // grabCursor: true
      }

    }
  },
  computed: {
    showswiper () {
      return this.swiperList.length
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
    padding-bottom 32.25%
  .swiper-img
    width:100%
    height :2.5rem
</style>
