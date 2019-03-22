<!--suppress ALL -->
<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">

          <img class="item-img"  :src="item.imgurl" alt="">

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [
        {
          id: 1,
          imgurl: 'http://img1.qunarzz.com/sight/p0/1803/45/450be7a159aee84aa3.img.jpg_200x200_7965cc4f.jpg',
          title: '青岛海泉湾度假区',
          desc: '浪漫青岛,浪漫的海洋主题乐园'
        },
        {
          id: 2,
          imgurl: 'http://img1.qunarzz.com/sight/p0/1505/af/afbcf2eeacd3f0fa.water.jpg_200x200_5c7eb08d.jpg',
          title: '青岛森林野生动物世界',
          desc: '浪漫青岛'
        },
        {
          id: 3,
          imgurl: 'http://img1.qunarzz.com/sight/p0/1707/a3/a3924161475dee37a3.img.jpg_200x200_5ba00364.jpg',
          title: '青岛海昌极地海洋世界',
          desc: '浪漫青岛,浪漫的海洋主题乐园'
        },
        {
          id: 4,
          imgurl: 'http://img1.qunarzz.com/sight/p0/1803/d2/d2c07fffb06ac2eea3.img.jpg_200x200_a3d9e7ec.jpg',
          title: '崂山',
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
  .item
    display flex

    overflow hidden
    height 1.9rem
    .item-img
      height 1.7rem
      width 1.7rem
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
      .item-button
        line-height .44rem
        background #ff9300
        padding .1rem
        border-radius .06rem
        margin-top .1rem
</style>
