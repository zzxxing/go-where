<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList" ></home-swiper>
    <home-icons :urlList="urlList"></home-icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  data () {
    return {
      city: '',
      urlList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('api/index.json').then(this.getHomeInfosucc)
    },
    getHomeInfosucc (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.urlList = data.iconList
        this.recommendList = data.recommendList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped></style>
