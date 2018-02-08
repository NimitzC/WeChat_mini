/***需要加个动画效果，点击事件发生后会有个动画效果然后到程序界面上***/
Page({
  onTap:function(){
   // wx.navigateTo({url:"../posts/post"})
    wx.redirectTo({
       url:"../posts/post"
    })
  },

  onUnload:function(){
   // console.log("welcome page is unload")
  },

  onHide:function(){
   // console.log("welcome page is hide")
  }
})