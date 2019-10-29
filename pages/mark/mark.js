// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    authorized:false,
    likeList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getMyLike()
  },
  //点击btn获取用户信息
  onGetUserInfo(e) {
    const userInfo = e.detail.userInfo
    if(userInfo) {
      this.setData({
        userInfo,
        authorized:true
      })
      this.getMyLike()
    }

  },
  //点击btn，允许后即为授权
  userAuthorized() {
    wx.getSetting({
      success: res => {
        if(res.authSetting['scope.userInfo']) {
          //res.authSetting['scope.userInfo']为true，即为授权成功，即可获取用户信息
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })
              this.getMyLike()
            }
          })
        }
      }
    })
  },
  getMyLike() {
    const likeList = wx.getStorageSync('likeList') || []
    this.setData({
      likeList
    })
  }
  
})