// pages/catalog/catalog.js
import {tagInfoList} from "../../utils/tagList.js";
import {SubscribeModel} from "../../models/subscribe.js";
const subscribeModel = new SubscribeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList:tagInfoList,
    myTagList:[],
    searchValue:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  onTap(){
    this.getData()
  },
  getData(){
    const myTagList = subscribeModel.getMyTagList()
    this.setData({
      myTagList
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      searchValue:''
    })
  },
})