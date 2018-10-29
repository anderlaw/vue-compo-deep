<template>
  <div class="page">
    <select v-model="local_pageSize" @change="pageSizeChange">
      <option v-for="(item,index) in pageSizes" :key="index" :value="item">{{ `${item}条/页` }}</option>
    </select>
    <span class="item" data-index="pre">&lt;</span>
    <span class="item" v-for="(item1,index1) in pageCount" :data-index="item1" :key="index1">{{item1}}</span>
    <span class="item" data-index="nxt">&gt;</span>
  </div>
</template>

<script>
// 分页组件
// 1. 自动分页（通过条目的总数和每页容纳的个数来进行划分）
// 200条， 每页容纳10条的话，200 / 10 = 20页
// 201 条，每页容纳10条的话，201 / 10 = 20+1页
// pageCount = Math.ceil(totalCount / pageSize)

// 页面可以切换每页容纳的条目数。切换

//可以点击某个页码。
//可以前后点击
export default {
  props:['pageSize','pageIndex','pageSizes','totalCount'],
  data(){
    return {
      local_pageSize:this.pageSize,
      local_pageIndex:this.pageIndex
    }
  },
  methods:{
    pageSizeChange(){
      console.log(this.local_pageSize)
      console.log(this.pageCount)
      if(this.local_pageIndex > this.pageCount){
        //需要重置素银页码
        this.local_pageIndex = this.pageCount;
      }else{
        //不需要改变
        this.$emit('pageChange',{
          pageSize:this.local_pageSize,
          pageIndex:this.local_pageIndex
        })
      }
    },
    initPage(){
      this.$nextTick(()=>{
        let currentItem = this.$el.querySelector(`[data-index="${this.local_pageIndex}"]`)
        currentItem.className = "item active"
      })
    },
    markPage(){
      this.$nextTick(()=>{
        let pageItems = this.$el.querySelectorAll('.item');
        let currentItem = this.$el.querySelector(`[data-index="${this.local_pageIndex}"]`)
        pageItems.forEach(element => {
          element.className = "item"
        });
        currentItem.className = "item active"
      })
    },
    registerClick(){
      this.$el.addEventListener('click',event=>{
        let target = event.target;
        if(target.className.indexOf('item') !== -1){
          //才是正确的监听对象
          let index = target.dataset.index;
          switch(index){
            case 'pre':
            if(this.local_pageIndex > 1){
              this.local_pageIndex --;
            }
            break;
            case 'nxt':
            if(this.local_pageIndex < this.pageCount){
              this.local_pageIndex ++;
            }
            break;
            default:
            this.local_pageIndex = parseInt(index);
            break;
          }
        }
      })
    }
  },
  computed:{
    pageCount(){
      return Math.ceil(this.totalCount / this.local_pageSize);
    }
  },
  mounted(){
    this.initPage();
    this.registerClick();
  },
  watch:{
    local_pageIndex(value){
      //监听到了变化
      this.markPage();
      //发射事件通知父组件来做一些操作
      this.$emit('pageChange',{
        pageSize:this.local_pageSize,
        pageIndex:this.local_pageIndex
      })
    }
  }
}
</script>

<style scoped>
.item{
  padding:4px 10px;
  background-color: #f4f4f5;
  margin: 4px;
  cursor: pointer;
}
.item.active{
  background-color: blue;
  color: #fff;
}
</style>
