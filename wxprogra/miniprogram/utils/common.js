/**
* 自定义函数-跳转新闻浏览页面
*/
function goToDetail(id) {
  wx.navigateTo({
    url: '../detail/detail?id='+id,
  })
}
function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
   
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
   
    return month+'月'+day+'日'
   }
   
   

module.exports = {
  goToDetail: goToDetail,
  formatTime:formatTime
}