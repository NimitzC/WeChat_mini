// pages/setting/setting.js
var postsData = "../index/index.js"
Page({
  data: {
    switchopen: false
  },
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
  },

  onMusicTap: function (event) {
    this.setData({
      switchopen: !switchopen
    })
    var isRuning = postsData.isRuning;
    if (isRuning && switchopen) {
      wx.playBackgroundAudio({
        dataUrl: 'http://zhangmenshiting.qianqian.com/data2/music/34f1a52820a66d12657f2827ee0fe78f/265723035/265723035.mp3?xcode=49043e2b2d4adc1bb123be2e4a685e68',
        title: "大鱼",
      })

    }
    else {
      wx.pauseBackgroundAudio();
    }
  }
})