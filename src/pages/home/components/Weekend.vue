<!--suppress ALL -->
<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-wapper">
          <img class="item-img"  :src="item.imgurl" alt="">
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
    data () {
      return {
        recommendList: [
          {
            id: 1,
            imgurl: 'http://img1.qunarzz.com/sight/source/1812/48/a34a5520c293d0.jpg_r_640x214_e1f38971.jpg',
            title: '青岛海泉湾度假区',
            desc: '浪漫青岛,浪漫的海洋主题乐园'
          },
          {
            id: 2,
            imgurl: 'http://img1.qunarzz.com/sight/source/1812/48/a34a5520c293d0.jpg_r_640x214_e1f38971.jpg',
            title: '青岛森林野生动物世界',
            desc: '浪漫青岛'
          },
          {
            id: 3,
            imgurl: 'http://img1.qunarzz.com/sight/source/1505/85/708da4ab8dba17.jpg_r_640x214_d3d8cfa5.jpg',
            title: '青岛必打卡',
            desc: '浪漫青岛,浪漫的海洋主题乐园'
          },
          {
            id: 4,
            imgurl: 'http://img1.qunarzz.com/sight/source/1505/d2/bde427ee954da9.jpg_r_640x214_ae0ab333.jpg',
            title: '青岛儿童畅玩',
            desc: '浪漫青岛,浪漫的海洋主题乐园'
          }
        ]
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
