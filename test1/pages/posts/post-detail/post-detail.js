var postsData = require('../../../data/posts-data.js')

Page({
  data: {},
  onLoad: function (option) {
    var postId = option.id;
    //console.log(postId)
    this.data.currentPostId = postId
    var postData = postsData.postList[postId];
    /*如果在onLoad方法中，不是异步的去执行一个数据绑定
    则不需要使用this.setData方法
    只需要对this.data复制即可实现数据绑定*/
    // this.data.postData = postData;
    this.setData({
      postData: postData
    })

    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {
      var postCollected = postsCollected[postId]
      this.setData({
        collected: postCollected
      })
    }
    else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected)
    }
  },
  onCollectionTap: function (event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected);
  },

//showModal不使用
  showModal: function (postsCollected, postCollected) {
    var that = this
    wx.showModal({
      title: "收藏",
      content: postCollected?"收藏该文章?":"取消收藏该文章?",
      showCancel: "true",
      cancelText: "取消",
      cancelColor: "#333",
      confirmText: "确定",
      confirmColor: "#405f80",
      success: function (res) {
        if (res.confirm) {
          //更新文章是否缓存
          wx.setStorageSync('posts_collected', postsCollected);
          //更新数据绑定变量，从而实现切换图片
          that.setData({
            collected: postCollected
          })
        }
      }
    })
  },

  showToast: function (postsCollected, postCollected) {
    //更新文章是否缓存
    wx.setStorageSync('posts_collected', postsCollected);
    //更新数据绑定变量，从而实现切换图片
    this.setData({
      collected: postCollected
    })

    wx.showToast({
      title: postCollected ? "收藏成功" : "取消收藏",
      duration: 1000,
      icon: "success"
    })
  },

  onShareTap:function(event){
    wx.showActionSheet({
      itemList:["分享给微信好友","分享到朋友圈","分享到QQ","分享到微博"]
    })
  }
})