Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: '洗护',
      },
      {
        cate_id: 2,
        cate_name: '生鲜'
      },
      {
        cate_id: 3,
        cate_name: '食品'
      },
      {
        cate_id: 4,
        cate_name: '女装'
      },
      {
        cate_id: 5,
        cate_name: '百货'
      },
      {
        cate_id: 6,
        cate_name: '母婴'
      },
      {
        cate_id: 7,
        cate_name: '手机'
      },
      {
        cate_id: 8,
        cate_name: '鞋靴'
      },
      {
        cate_id: 9,
        cate_name: '运动'
      },
      {
        cate_id: 10,
        cate_name: '美家'
      },
      {
        cate_id: 11,
        cate_name: '男装'
      },
      {
        cate_id: 12,
        cate_name: '水果'
      },
      {
        cate_id: 13,
        cate_name: '电子'
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id, index = e.target.dataset.index;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  img_w_show() {
    var _this = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        _this.setData({
          imglist: _this.data.imglist.concat(tempFilePaths)
        })
      }
    })
  }

})