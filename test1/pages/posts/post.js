var postsData = require('../../data/posts-data.js')

Page({
  /**
   * 页面的初始数据
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

     this.setData({
       posts_key:postsData.postList
     });
  },

onPostTap:function(){
  console.log("onPostTap");
}
})