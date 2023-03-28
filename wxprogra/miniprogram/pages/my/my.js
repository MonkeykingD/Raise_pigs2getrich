Component({
    options: {
      addGlobalClass: true,
    },
    data: {
      authorized:false,
      userInfo:null,
      starCount: 0,
      forksCount: 0,
      visitTotal: 0,
    },

    attached() {
      console.log("success")
      let that = this;
      wx.showLoading({
        title: '数据加载中',
        mask: true,
      })
      let i = 0;
      numDH();
      function numDH() {
        if (i < 20) {
          setTimeout(function () {
            that.setData({
              starCount: i,
              forksCount: i,
              visitTotal: i
            })
            i++
            numDH();
          }, 20)
        } else {
          that.setData({
            starCount: that.coutNum(3000),
            forksCount: that.coutNum(484),
            visitTotal: that.coutNum(24000)
          })
        }
      }
      wx.hideLoading()
    },
    methods: {
        async tapimg(){
            const{userInfo}= await wx.getUserProfile({
                desc: '用于完善个人资料',
              })
              const {result}=await wx.cloud.callFunction({
                  name:'login',
                  data:{
                      nickName:userInfo.nickName,
                      avatarUrl:userInfo.avatarUrl,
                      gender:userInfo.gender,
                  }
              })
              wx.setStorageSync('userInfo', result.data)
              this.setData({
                  userInfo:result.data,
                  authorized:true
              })
        },
        async getUserInfo(){
            const data=wx.getStorageSync('userInfo')
            if(data){
                const userInfo= await wx.cloud.database().collection('userInfo').doc(data._id).get()
                this.setData({
                    userInfo:userInfo.data
                })
            }
        },   
        tabBar() {
            if (typeof this.getTabBar === 'function' && this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 4
                })
            }
        }, 
      coutNum(e) {
        if (e > 1000 && e < 10000) {
          e = (e / 1000).toFixed(1) + 'k'
        }
        if (e > 10000) {
          e = (e / 10000).toFixed(1) + 'W'
        }
        return e
      },
      showModal(e) {
        this.setData({
          modalName: e.currentTarget.dataset.target
        })
      },
      hideModal(e) {
        this.setData({
          modalName: null
        })
      },
      showQrcode() {
        wx.previewImage({
          urls: ['https://image.weilanwl.com/color2.0/zanCode.jpg'],
          current: 'https://image.weilanwl.com/color2.0/zanCode.jpg' // 当前显示图片的http链接      
        })
      },
    },
    pageLifetimes: {
        show: function() {
          // 页面被展示
        },
        hide: function() {
          // 页面被隐藏
        },
        resize: function(size) {
          // 页面尺寸变化
        }
      },  
    pageLifetimes: {
    show: function() {
        this.getUserInfo(),
        this.tabBar()
    },

  },
  
  })