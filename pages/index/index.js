// pages/index/index.js


//首先用Promise封装request函数来请求数据
//将需要请求的数据封装到IndexModel函数中，通过extend继承request的getData方法
import {IndexModel} from "../../models/index.js"
import {random} from "../../utils/randomStr.js"
const indexModel = new IndexModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList:[],
    markTypeList:[],
    recommendInfo:{},
    getMore:"",
    magazineId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getData()
      wx.showLoading()
  },

  //监听用户上拉触底事件
  onReachBottom(){
    this.setData({
      getMore:random(20)
    })
  },

  //点击'轻芒','兴趣','物质','世界','新事','灵魂'
  onNav(e){
    const magazineId = e.detail.index
    this.setData({
      magazineId:magazineId,
      articleList:[],
      markTypeList:[],
      recommendInfo:{},
    })
    this.pageScrollTo()
    this.getData(magazineId)
  },

  // 点击...跳转到tabBar目录页面
  onCatalog(){
    wx.switchTab({
      url:"/pages/catalog/catalog"
    })
  },

  //获取数据
  getData(magazineId) {
    const articleList = indexModel.getArticleList(magazineId);
    const markTypeList = indexModel.getMarkTypeList(magazineId);
    const recommendInfo = indexModel.getRecommendInfo(magazineId);
    Promise.all([articleList,markTypeList,recommendInfo]).then(res =>{
      this.setData({
        articleList:res[0],
        markTypeList:res[1],
        recommendInfo:res[2]
      })
      wx.hideLoading()
    })

  },
  //切换页面时，将页面滚动到目标位置
  pageScrollTo(){
    wx.pageScrollTo({
      scrollTop:0,
      duration:0
    })
  }
})