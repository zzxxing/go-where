<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="this.allcity" :hot="hotcity" :city="city"></city-list>
    <Alphabet :cities="allcity" @change="changecity"></Alphabet>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import Alphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  data () {
    return {
      allcity: {},
      hotcity: [],
      city: ''
    }
  },
  mounted () {
    this.getcityInfo()
  },
  methods: {
    getcityInfo () {
      axios.get('api/city.json').then(this.getCityInfosucc)
    },
    getCityInfosucc (res) {
      console.log(res.data.data)
      const data = res.data.data
      this.allcity = data.cities
      this.hotcity = data.hotCities
    },
    changecity (zzx) {
      this.city = zzx
      console.log(zzx)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
