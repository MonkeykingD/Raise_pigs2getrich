
    var util=require('../../../utils/common.js')
    // pages/price/datadetail/datadetail.js
    import * as echarts from '../../../ec-canvas/echarts';
    const db = wx.cloud.database()
    const pricedata = db.collection('provinceprice')
    const xdate=db.collection('datedata')
    const nmap=db.collection('namemap')
    var newd
    function initChart1(canvas, width, height,dpr) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      canvas.setChart(chart);
    
      var option = {
        color: ["#3CB371"],
        legend: {
          itemWidth: 5,//小圆点的宽度
          data: ['生猪'],
          top: 30,
          left: 'right',
          z: 100
        },
        grid: {
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          // show: false
        },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        
        series: [{
          name: '生猪',
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              { offset: 0, color: "#F0FFF0" },
              { offset: 1, color: "#32CD32" }
            ])
          },
          data: [18, 16.12, 16.76, 16.19, 17.2, 17.6, 17.78],
        }]
      };
      chart.setOption(option);
      return chart;
      
    }
    function initChart2(canvas, width, height) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        //devicePixelRatio: dpr
      });
      canvas.setChart(chart);
    
      var option = {
        color: ["#3CB371"],
        legend: {
          itemWidth: 5,//小圆点的宽度
          data: ['玉米'],
          top: 30,
          left: 'right',
          z: 100
        },
        grid: {
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          // show: false
        },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        
        series: [{
          name: '玉米',
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              { offset: 0, color: "#F0FFF0" },
              { offset: 1, color: "#32CD32" }
            ])
          },
          data: [2926, 2929, 2912, 2951, 2910, 2921, 2914]
        }]
      };
      
      chart.setOption(option);
      return chart;
    }
    function initChart3(canvas, width, height) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        //devicePixelRatio: dpr
      });
      canvas.setChart(chart);
    
      var option = {
        color: ["#3CB371"],
        legend: {
          itemWidth: 5,//小圆点的宽度
          data: ['豆粕'],
          top: 30,
          left: 'right',
          z: 100
        },
        grid: {
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          // show: false
        },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        
        series: [{
          name: '豆粕',
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              { offset: 0, color: "#F0FFF0" },
              { offset: 1, color: "#32CD32" }
            ])
          },
          data: [4528, 4493, 4507, 4309, 4302, 4470, 4490]
        }]
      };
      
      chart.setOption(option);
      return chart;
    }

    Page({
    
        /**
         * 页面的初始数据
         */
        data: {
            currentTab:0,
            zhu:0,
            yu:0,
            dou:0,
            name:'',
            tabInfo: ['生猪走势', '玉米走势', '豆粕走势',],
            ec1: {
                onInit:initChart1
            },
            ec2: {
                onInit:initChart2
            },
            ec3:{
                onInit:initChart3
            },
            clickTab1:true,
            clickTab2:false,
            clickTab3:false
          },
          clickTab1: function(e) {
              var that=this;
              that.setData({
                clickTab1:true,
                clickTab2:false,
                clickTab3:false
              })
              if (this.data.currentTab === e.target.dataset.current) {
                  return false;
              } else {
                  this.setData({
                      currentTab: e.target.dataset.current
                  })
              }
          },
          clickTab2: function(e) {
            var that=this;
            that.setData({
              clickTab1:false,
              clickTab2:true,
              clickTab3:false,
            })
            if (this.data.currentTab === e.target.dataset.current) {
                return false;
            } else {
                this.setData({
                    currentTab: e.target.dataset.current
                })
            }
          },
          clickTab3: function(e) {
            var that=this;
            that.setData({
              clickTab1:false,
              clickTab2:false,
              clickTab3:true,
            })              
            if (this.data.currentTab === e.target.dataset.current) {
                return false;
            } else {
                this.setData({
                    currentTab: e.target.dataset.current
                })
            }
          },
        onLoad(options) {

            pricedata.doc(options.id).field({
                name:true,
                value:true,
                yumi:true,
                doupo:true
            }).get({
                success: (res) => {
                    this.setData({name:res.data.name,
                        date:util.formatTime(new Date()),
                        zhu:res.data.value,
                        yu:res.data.yumi,
                        dou:res.data.doupo
                    })
                    nmap.where({name:res.data.name}).get({
                        success: (res) => {
                            xdate.where({areaid:parseInt(res.data[0].areaid)}).get({
                                success: (res) => {
                                    console.log(res.data[0].data)
                                    //这个地方可以动态获得数据了，安徽六安有，广东东莞有，怎么用你调一下
                                    if(!res.data[0].data){}
                                    else{
                                        newd=res.data[0].data
                                    }
                                    
                                }
                            }
                            )
                        }
                    })
                }
            })
        }
    })