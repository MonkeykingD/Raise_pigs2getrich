// pages/detail/detail.js
const db = wx.cloud.database()
const news = db.collection('news1')
const news2 = db.collection('news2')
const news3 = db.collection('news3')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {}
  },

  /**
   * 自定义函数--添加到收藏夹
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 显示loading提示框
    wx.showLoading({
      title: '数据加载中'
    })

    // 获取新闻编号
    let id = options.id
    //根据新闻_id查找是否在收藏夹里
    let article = wx.getStorageSync(id)

    //新闻在收藏夹中
    if (article != '') {
      // 更新页面上的新闻信息和收藏状态
      this.setData({
        article: article,
        isAdd: true
      })
      // 隐藏loading提示框
      wx.hideLoading()
    }
    //新闻不在收藏夹中
    else {
      // 根据新闻id在云数据集中查找新闻内容
      news3.doc(id).get({
        success: res => {
          // 更新页面上的新闻信息和收藏状态
          this.setData({
            article: res.data,
            isAdd: false
          })
          // 隐藏loading提示框
          wx.hideLoading()
        }
      })
      news2.doc(id).get({
        success: res => {
          // 更新页面上的新闻信息和收藏状态
          this.setData({
            article: res.data,
            isAdd: false
          })
          // 隐藏loading提示框
          wx.hideLoading()
        }
      })
      news.doc(id).get({
        success: res => {
          // 更新页面上的新闻信息和收藏状态
          this.setData({
            article: res.data,
            isAdd: false
          })
          // 隐藏loading提示框
          wx.hideLoading()
        }
      })
    }
  },


})