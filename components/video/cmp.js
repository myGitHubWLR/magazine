
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc:String,
    poster:String,
    duration:String,
    mainTitle:String,
    videoId:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    //切换图片显示与隐藏
    showPoster:true
  },

  //组件生命周期函数,在组件实例进入页面节点树时执行
  lifetimes:{
    attached(){
      this._getVideoInfo()
    }
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    //点击播放视频
    onPlay(){
      this._toggerPlay()
      this.video.play()
    },
    
    //点击mask停止播放视频
    onMaskTap() {
      this._toggerPlay()
      this.video.seek(0)
      this.video.stop()
    },
    //视频播放完毕
    onVideoEnd(){
      this._toggerPlay()
    },
    
    //共有代码
    _toggerPlay(){
      this.setData({
        showPoster:!this.data.showPoster
      })
    },
    _getVideoInfo(){
      const id = this.properties.videoId
      this.video = wx.createVideoContext(id,this)
      //this实例对象
    },

  }
})
