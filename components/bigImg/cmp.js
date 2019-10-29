import {myBeh} from "../behaviors/my-behavior.js";

Component({
  // 组件间代码共享
  behaviors:[myBeh],
  /**
   * 组件的属性列表
   */
  // 注 ：properties中属性的优先值高于data中的值
  properties: {
    // imgSrc:{
    //   type:String,
    //   value:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
    //   observer:function(newVal,oldVal,changePath){
      //数据发生变化时触发
    //   }
    // },
    // mainTitle:{
    //   type:String,
    //   value:"穿夹克，可以让你飞起来",
    //   observer:function(){

    //   }
    // }

    //属性为空字符串，在引用组件时来设置属性
    // imgSrc:String,
    // mainTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
