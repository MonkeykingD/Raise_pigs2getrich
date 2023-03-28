var util=require('../../utils/common.js')
import * as echarts from '../../ec-canvas/echarts';
var QQMapWX = require('../../lib/qqmap-wx-jssdk.min.js');
const db = wx.cloud.database()
const pricedata = db.collection('provinceprice')
var qqmapsdk;
var that
var data = [
    //这个名字要跟现在的那个省份对上
  ];




Page({
  data: {
    ec: {
        lazyLoad: true
    },
    ec1:{
        lazyLoad: true
    },
    region:'',
    province:["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","台湾省","香港特别行政区","澳门特别行政区"],
    min:0,
    max:0,
    avg:0,
    maxname:'',
    minname:'',
    //海南太小了不展示
  },
    onLoad: function () {
        // 实例化API核心类
        this.setData({
            loadModal: true,
            date:util.formatTime(new Date())
          })
        qqmapsdk = new QQMapWX({
            key: 'KIUBZ-LFP3U-ES4VQ-2VL2W-5WRBS-2EFEX'
        });
        that=this
        let vm = this;
        vm.getUserLocation();
    },
    onShow: function () {
        // 调用接口
        this.tabBar()
        that.ecComponent = that.selectComponent('#mychart-dom-area')
        that.ecComponent2 = that.selectComponent('#mychart-dom-area1')

    },
    tabBar() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
          this.getTabBar().setData({
              selected: 3
          })
      }
  }, 
    getUserLocation: function () {
        let vm = this;
        wx.getSetting({
          success: (res) => {
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
              wx.showModal({
                title: '养猪我最行请求授权当前位置',
                content: '需要获取您的地理位置，请确认授权',
                success: function (res) {
                  if (res.cancel) {
                    wx.showToast({
                      title: '拒绝授权',
                      icon: 'none',
                      duration: 1000
                    })
                  } else if (res.confirm) {
                    wx.openSetting({
                      success: function (dataAu) {
                        if (dataAu.authSetting["scope.userLocation"] == true) {
                          wx.showToast({
                            title: '授权成功',
                            icon: 'success',
                            duration: 1000
                          })
                          //再次授权，调用wx.getLocation的API
                          vm.getLocation();
                        } else {
                          wx.showToast({
                            title: '授权失败',
                            icon: 'none',
                            duration: 1000
                          })
                        }
                      }
                    })
                  }
                }
              })
            } else if (res.authSetting['scope.userLocation'] == undefined) {
              //调用wx.getLocation的API
              vm.getLocation();
            } else {
              //调用wx.getLocation的API
              vm.getLocation();
            }
          }
        })
      },
      // 微信获得经纬度
      getLocation: function () {
        let vm = this;
        wx.getLocation({
          type: 'wgs84',
          success: function (res) {
            var latitude = res.latitude
            var longitude = res.longitude
            var speed = res.speed
            var accuracy = res.accuracy;
            vm.getLocal(latitude, longitude)
          },
          fail: function (res) {
            console.log('fail' + JSON.stringify(res))
          }
        })
      },
      // 获取当前地理位置
      getLocal: function (latitude, longitude) {
        let vm = this;
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            console.log(res.result.ad_info.province);
            let province = res.result.ad_info.province
            vm.downloadJSON(province)
            vm.setData({
              region: province,
            })
    
          },
          fail: function (res) {
            console.log("fail");
            console.log(res);
          },
        });
      },
      regionChange: function (e) {
        this.chart.clear()
          //this.chart2.clear()
        this.setData({
            loadModal: true
          })
        this.setData({
          region: this.data.province[e.detail.value]
        })
        this.downloadJSON(this.data.province[e.detail.value])
         //换省份地图
      },
      downloadJSON(region){
          let that=this
          console.log(region)
          pricedata.where({province:region}).field({name:true,
            value:true
        }).get({
            success:res=>{
                data=res.data
                console.log(data)
                let max=Math.max.apply(Math, data.map(function(o) {return o.value}))
                let min=Math.min.apply(Math, data.map(function(o) {return o.value}))
                let sum=0
                let avg
                var index1 = data.findIndex(item => item.value === max)
                var index2 = data.findIndex(item => item.value === min)
                
                for(var i = 0; i <= data.length-1; i++){
                    sum += data[i].value;
                  }
                  avg = sum / data.length;
                  avg = avg.toFixed(2);
                this.setData({
                    max:max,min:min,
                    avg:avg,
                    maxname:data[index1].name,
                    minname:data[index2].name,
                })
                
            }
        })
        wx.cloud.downloadFile({
            fileID: 'cloud://cloud1-1g4459t25da22ef5.636c-cloud1-1g4459t25da22ef5-1310678218/json/'+region+'.json', // 文件 ID
            success: res => {
              // 返回临时文件路径
              that.setData({
                loadModal: false
              })
            let fs = wx.getFileSystemManager()
              // 注意编码格式为'utf-8'
            fs.readFile({            
                filePath:res.tempFilePath,
                encoding:'utf8',
                success(res){
                    that.drawJx(res.data);
                  },
                })
              //fs.readFileSync(res.tempFilePath, "utf-8")
              
            },
            fail: console.error
          })
      },
      drawJx(json){
        that.ecComponent.init((canvas, width, height, dpr) => {
          // 获取组件的 canvas、width、height 后的回调函数
          // 在这里初始化图表
          const chart = echarts.init(canvas, null, {
            width: width,
            height: height,
            devicePixelRatio: dpr // new
          });
          canvas.setChart(chart);
          json=json.slice(1)
          echarts.registerMap('anhui', json) // 绘制江西地图
          const option = {
            geo: {
              type:'map',
              map:'anhui',
            },
            //不显示点击后的pop弹框
            tooltip: {
              trigger: 'item',
              formatter: '{b}猪价：{c}元/kg'
            },
            visualMap: {
              min: 10,
              max: 30,
              left: 'left',
              top: 'bottom',
              text: ['高', '低'], // 文本，默认为数值文本
              calculable: true,
              inRange: {
                color: ['#90EE90', '#32CD32', '#228B22']
              },
              show:true,
            },
            series: [{
              name:'各地猪价',
              type: 'map',
              map: 'anhui',
              id: 'price',
              label: {
                normal: {
                  show: true,
                  //正常状态下字体颜色
                  textStyle: {
                    color: '#a0522d',
                    fontSize: 10,
                    fontWeight: 'bolder'
                  }
                },
                //选中后的字体颜色
                emphasis: {
                  textStyle: {
                    color: '#fff',
                  }
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#006400',
                  borderWidth: 1,
                },
                emphasis: {
                  areaColor: '#FFD700',
                  borderWidth: 1,
                }
              },
              animation: true,
              data: data,
            }]
          }
          chart.setOption(option)
    
          // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
          that.chart = chart
          chart.on('click', function (params) {
            // 控制台打印数据的名称
            if(!params.data)
            {
                wx.showModal({
                    content:"暂无相关数据",
                  cancelColor: 'cancelColor',
                })
            }else{
            wx.navigateTo({
              url: '../price/datadetail/datadetail?id='+params.data._id,
            })}
            //dosomething
          })
          // 注意这里一定要返回 chart 实例，否则会影响事件处理等
          return chart
        })
      },

});
