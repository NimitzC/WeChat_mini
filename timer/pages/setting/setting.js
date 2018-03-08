// pages/setting/setting.js
Page({
  onShow: function () {
    this.setData({
      workTime: wx.getStorageSync('workTime'),
      restTime: wx.getStorageSync('restTime')
    })
  },
  changeWorkTime: function (e) {
    wx.setStorage({
      key: 'workTime',
      data: e.detail.value
    })
  },
  changeRestTime: function (e) {
    wx.setStorage({
      key: 'restTime',
      data: e.detail.value
    })
  },

  setLoading: function (event) {
    wx.navigateTo({
      url: '../about/about',
    })
  }
})