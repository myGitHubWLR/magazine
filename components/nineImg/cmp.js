// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr:[
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=935292084,2640874667&fm=27&gp=0.jpg" ,
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2230167403,4188800858&fm=27&gp=0.jpg" ,
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2687927787,2181890558&fm=27&gp=0.jpg" ,
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3406860327,2276285180&fm=27&gp=0.jpg" ,
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2717595227,1512397782&fm=27&gp=0.jpg" ,
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2996733220,3486718768&fm=27&gp=0.jpg" ,
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=250029045,856017592&fm=27&gp=0.jpg" ,
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1398231733,1777598903&fm=27&gp=0.jpg" ,
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3494525548,3582508678&fm=27&gp=0.jpg" ,
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapImg(e){
      var array = this.data.imgArr;
      var index = e.currentTarget.dataset.index
      //在新页面中全屏预览图片
      wx.previewImage({
        current: array[index], // 当前显示图片的http链接
        urls: array // 需要预览的图片http链接列表
      })
    }
    
  }
})
