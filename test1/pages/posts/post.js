var postsData = require('../../data/posts-data.js')

Page({
  /**
   * 页面的初始数`据
   */
  data: {
  },

/*小程序不支持document优先的原则
  process:function(){
    var date = "Feb 8 2018";
    var date_ele = documnet.getElementById('id');
  },
*/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // this.data.postList = postsData.postList
     this.setData({   
       posts_key:postsData.postList
     });
  },

onPostTap:function(event){
  var postid = event.currentTarget.dataset.postid;
  //console.log("on post id is "+postid);
  wx.navigateTo({
    url:"post-detail/post-detail?id="+postid
  })
}
})