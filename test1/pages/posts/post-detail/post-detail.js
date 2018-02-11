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
    //更新文章是否缓存
    wx.setStorageSync('posts_collected', postsCollected);
    //更新数据绑定变量，从而实现切换图片
    this.setData({
      collected: postCollected
    })
  }
})