// pages/news/news.js
var common = require('../../utils/common.js')
const db = wx.cloud.database()
const news = db.collection('news1')
const news2 = db.collection('news2')
const news3 = db.collection('news3')
var row=7
var page=0
var nownews=news
Page({

    /**
     * 页面的初始数据
     */
    data: {
        TabCur:0,
        tabInfo:['猪价行情','原料信息','行业资讯']
    },
    goToDetail:function(e){
        common.goToDetail(e.currentTarget.dataset.id)
    },
    tabSelect(e) {
        this.setData({
          TabCur: e.currentTarget.dataset.id,
          scrollLeft: (e.currentTarget.dataset.id-1)*60
        })
        row=7
        page=0
        if(e.currentTarget.dataset.id==0){
            nownews=news
        }else if(e.currentTarget.dataset.id==1){
            nownews=news2
        }else if(e.currentTarget.dataset.id==2){
            nownews=news3
        }
        nownews.limit(row).get({
            success:res=>{
                this.setData({
                    newsList:res.data
                })
            }
        })
        //this.news
      },
    onShow: function () {
        this.tabBar()
    },
    onLoad:function(options){
        news.limit(row).get({
            success:res=>{
                this.setData({
                    newsList:res.data
                })
            }
        })
    },
    onReachBottom: function(){
        this.setData({
            loadModal: true
          })
        page++
        nownews.skip(row*page).limit(row).get({
            success:res=>{
                this.setData({
                    loadModal: false
                  })
                if(res.data.length==0){
                    wx.showToast({
                        title: '无更多资讯',
                        icon:'none'
                      })
                }else{
                    let old_data=this.data.newsList
                    let new_data=res.data
                    console.log(old_data.concat(new_data))
                    this.setData({
                        newsList:old_data.concat(new_data)
                    })
                }

            }
        })
    },
    tabBar() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    }, 
 
})