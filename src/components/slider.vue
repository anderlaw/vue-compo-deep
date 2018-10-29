<template>
<div class="slider">
  <div class="top-bar">
    <span @click="handleClick('back')">&lt;</span>
    <span @click="handleClick('forwar')">&gt;</span>
  </div>
  <div class="wrap">
    <div class="content">
      <slot>

      </slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      index:0,
      contentBox:null,
      unitWidth:0,
      count:0,
    }
  },
  methods:{
    handleClick(type){
      if(type === 'back'){
        if(this.index === 0){
          this.index = this.count -1;
        }else{
          this.index --
        }
      }else{
        if(this.index === this.count-1){
          this.index = 0;

        }else{
          this.index ++
        }
      }
    },
    initBoxSize(){
      //计算内容盒子的宽度
      this.contentBox.style.width = this.count * this.unitWidth +'px';
      //计算每页的宽度
      let pageItems = this.$el.querySelectorAll('.slider-item');
      pageItems.forEach(item=>{
        item.style.width = this.unitWidth +'px';
      })
    }
  },
  mounted(){
    //计算容器的宽度
    this.unitWidth = parseFloat(getComputedStyle(this.$el.querySelector('.wrap')).width);
    //页数
    this.count = this.$el.querySelectorAll('.slider-item').length;
    //计算内容盒子的宽度
    this.contentBox = this.$el.querySelector('.content');

    this.initBoxSize();
  },
  watch:{
    index(value){
      console.log('')
      this.contentBox.style.left = -value*this.unitWidth +'px';
    }
  }
}
</script>

<style scoped>
  .slider{
    margin-top: 10px;
    padding:8px;
  }
  .top-bar{
    text-align: right;
    background-color: #fefefe;
    border: 1px solid #e3e3e3;
    line-height: 30px;
  }
  .top-bar >span{
    padding:4px 6px;
    cursor: pointer;
    font-size: 12px;
  }
  .slider .wrap{
    left:0;
    width: 100%;
    overflow: hidden;
    position: relative;
    border:1px green solid;
    box-sizing: border-box;
  }
  .slider .content{
    left:0;
    position: relative;
    display: inline-block;
    transition:left 0.5s ease-in-out;
  }
</style>
