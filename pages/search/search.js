// pages/search/search.js
import{SearchModel}from"../../models/search.js"
import{random}from"../../utils/randomStr.js"
const searchModel = new SearchModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searching:true,
    more:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const searchValue = options.searchValue
    this.setData({
      searchValue
    })
    this.getData(searchValue)
  },

  getData(word){
    const searchRecommend = searchModel.getSearchRecommend(word)
    const searchArticleList =searchModel.getSearchArticleList(word)
    Promise.all([searchRecommend,searchArticleList]).then(res =>{
      this.setData({
        tag:res[0].tag,
        recommend:res[0].recommend,
        articleList: res[1],
        searching:false
      })
    })
  },
  //上拉触底事件
  onReachBottom(){
    this.setData({
      more:random(20)
    })
  }

})