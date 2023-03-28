Component({
	properties: {},
	data: {
        //当前高亮项
		selected: 0,
        //tabBar页面数据
		tabList: [
            {
                "pagePath": "pages/news/news",
                "text": "资讯",
              },
              {
                "pagePath": "pages/shop/shop",
                "text": "商家地图",
              },
              {},
              {
                "pagePath": "pages/price/price",
                "text": "猪价",
              },
              {
                "pagePath": "pages/my/my",
                "text": "我的",
              }
            ]
	},
	attached: function() {},
	methods: {
        //底部切换
        active(e){
            let key = Number(e.currentTarget.dataset.index);
			let tabList = this.data.tabList;
			let selected= this.data.selected;		
			if(selected !== key){
				this.setData({
					selected:key
				});
			}
        },
		switchTab(e) {
			let key = Number(e.currentTarget.dataset.index);
			let tabList = this.data.tabList;
			let selected= this.data.selected;
			
			if(selected !== key){
				this.setData({
					selected:key
				});
				wx.switchTab({
					url: `/${tabList[key].pagePath}`,
				})
			}
        },
        image(){
            const that=this

            wx.chooseMedia({
              count: 9,
              mediaType: ['image','video'],
              sourceType: ['album', 'camera'],
              maxDuration: 30,
              camera: 'back',
              success (res) {
                // that.setData({
                //     loadModal: true
                //   })
                wx.showLoading({  // 显示加载中loading效果 
                    title: "加载中",
                    mask: true  //开启蒙版遮罩
                  });
                const tempFiles = res.tempFiles
                console.log("你真棒")
                wx.uploadFile({
                  url: 'https://okeydoke.top:5000/photo', //仅为示例，非真实的接口地址  /file/upload
                  filePath: tempFiles[0].tempFilePath,
                  name: 'file',
                  header: {
                    "Content-Type": "multipart/form-data"
                  },
                  formData: {
                    'user': 'test'
                  },
                  success (res){
                    const data = JSON.parse(res.data)
                    console.log(123,data)
                    //do something
                    that.setData({
                        pignum:data.pigs
                    })
                    that.setData({
                        loadModal: false
                      })
                      wx.hideLoading();
                    wx.showModal({
                        title: '统计数量',
                        content: '照片里共有'+that.data.pignum+'头🐖',
                        showCancel: true,
                        cancelText: '关闭',
                    })
                    
                  },
                  fail(res){
                    console.log("很不幸，失败了",res)
                    that.setData({
                        loadModal: false
                      })
                  }
                })
              }
            })
          },
          showModal(e) {
            this.setData({
              modalName: 'Modal'
            })
          },
          hideModal(e) {
            this.setData({
              modalName: null
            })
          },
	}
})