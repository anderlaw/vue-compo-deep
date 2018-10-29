<template>
  <div>
    <page @pageChange="handlePageChange" :pageSize="30" :pageIndex="1" :pageSizes="[10,30,50,100]" :totalCount="totalCount" />
    <!-- 轮播图 -->
    <slider style="width:400px;">
      <slider-item>
        <book style="width:400px;" text="基于 hapi 的 Node.js 小程序后端开发实践指南"/>
        <book style="width:400px;" text="基于 hapi 的 Node.js 小程序后端开发实践指南"/>
        <book style="width:400px;" text="基于 hapi 的 Node.js 小程序后端开发实践指南"/>
      </slider-item>
      <slider-item>
        <book style="width:400px;" text="基于 hapi 的 Node.js 小程序后端开发实践指南"/>
      </slider-item>
      <slider-item>
        <book style="width:400px;" text="基于 hapi 的 Node.js 小程序后端开发实践指南"/>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import page from '@/components/page'
import book from '@/components/book'
//sldier
import slider from '@/components/slider'
import sliderItem from '@/components/slider-item'
var imgSrc1 = require('../assets/1.jpg')
var imgSrc2 = require('../assets/2.jpg')
var imgSrc3 = require('../assets/3.jpg')
export default {
  components:{
    page,
    slider,
    sliderItem,
    book
  },
  data(){
    return {
      imgSrc1,
      imgSrc2,
      imgSrc3,
      totalCount:200
    }
  },
  methods:{
    handlePageChange(val){
      console.log(val)
    }
  },
  mounted(){

  }
}
</script>

<style>

</style>
