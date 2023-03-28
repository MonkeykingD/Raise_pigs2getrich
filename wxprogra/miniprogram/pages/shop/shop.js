
const app = getApp()
var list = [{name:'屠宰厂',id:'0',
array:[{name:'来安县清流屠宰有限公司', people:'储成虎', phone:13909603339, address:'安徽省滁州市来安县城西门（清流市场院内）'},
{name:'安徽青拓屠宰机械制造有限公司', people:'龚斌', phone:13951777068, address:'马鞍山市博望区丹阳镇丹东工业园北'},
{name:'六安市叶集区宏旺屠宰有限公司', people:'韦启云', phone:15955991660, address:'六安市叶集区姚李镇双红村'},
{name:'马鞍山润飞屠宰机械制造有限公司', people:'姚晨', phone:13814137930, address:'马鞍山市博望区博望镇三杨开发区南'},
{name:'马鞍山优典屠宰机械设备制造有限公司', people:'吴章杰', phone:18851933995, address:'马鞍山市博望区博望镇九博科技园8号'},
{name:'安徽盈泰屠宰加工有限公司', people:'展永强', phone:18134603777, address:'安徽省宿州市砀山县经济开发区汇丰市场南200米'},
{name:'绩溪县岭北屠宰有限公司', people:'张幼明', phone:18605636097, address:'安徽省宣城市绩溪县长安镇镇头村田玕16号'},
{name:'太湖县安心屠宰加工有限公司', people:'吕鹏英', phone:13965813008, address:'太湖县经济开发区龙安村曹屋组421号'},
{name:'怀宁绿生屠宰有限公司', people:'汪俊斌', phone:13485871268, address:'安徽省安庆市怀宁县高河镇平安村'},
{name:'马鞍山明顺屠宰设备制造有限公司', people:'陈本武', phone:13814097145, address:'安徽省安庆市怀宁县高河镇平安村'},
{name:'太和县鑫聚屠宰有限公司', people:'韩园园', phone:18010998155, address:'安徽省阜阳市太和县旧县镇旧县街口向北路西13号'},
{name:'安徽安乐屠宰机械制造有限公司', people:'杨志', phone:13955557266, address:'马鞍山经济技术开发区阳湖路398号14栋4层'}]},{name:'腊肉制品',id:'1',
array:[
    {name:'合肥绿益食品有限公司', people:'谈社涛', phone:13705512237, address:'肥东县撮镇镇合肥商贸物流开发区喻闸路东侧'},
    {name:'休宁县桑园腊肉加工厂', people:'孙志勇', phone:13625532108, address:'休宁县万安镇万新村双元8号'},
    {name:'石台县沈家食品有限公司', people:'沈复新', phone:18956624200, address:'石台县矶滩乡沟丁村龙坡组'},
    {name:'合肥市包河区慈云腊肉香肠饭店', people:'何东升', phone:13956083330, address:'安徽省合肥市包河区慈云村第四村民组36号'},
    {name:'郎溪县飞鲤镇幸福好运家畜养殖家庭农场', people:'吴子英', phone:13170137682, address:'郎溪县飞鲤镇王村'},
    {name:'合肥岭牧农产品有限公司', people:'谈世群', phone:13956040387, address:'安徽省合肥市经济技术开发区习友路与观海路交叉口18幢依澜雅居18幢2902室'},
    {name:'芜湖宏洋食品有限公司', people:'胡晓宝', phone:13855349928, address:'安徽省芜湖市三山区芜湖绿色食品经济开发区'}]},{name:'个人商户',id:'2',
    array:[{name:'涡阳县岳峰猪肉摊', people:'岳峰', phone:15956722385, address:'安徽省亳州市涡阳县青年路'},
    {name:'全椒县德芳猪肉零售点', people:'唐德芳', phone:15055003418, address:'安徽省滁州市全椒县襄河镇南屏农贸城14组18号摊位'},
    {name:'石台县小河镇莘田村猪肉铺', people:'郝加财', phone:13856870428, address:'安徽省池州市石台县小河镇莘田村'},
    {name:'宿松县程岭乡猪肉批发点', people:'胡得全', phone:15212989388, address:'宿松县程岭乡程岭街10号'},
    {name:'滁州市琅琊区潘记猪肉经营部', people:'潘小凤', phone:13705500962, address:'安徽省滁州市凤凰农贸产品大市场'},
    {name:'亳州市谯城区王强猪肉经营部', people:'王跃庭', phone:13355675800, address:'城区新兴路126号新兴农贸市场内南门11号门面房'},
    {name:'濉溪县许峰猪肉摊', people:'许峰', phone:18709852640, address:'安徽省淮北市濉溪县陈集乡罗集街'},
    {name:'青阳县蓉城镇金平猪肉铺', people:'储成虎', phone:13909603339, address:'安徽省滁州市来安县城西门（清流市场院内）'},
    {name:'蒙城县漆园办事处陈超猪肉销售点', people:'陈超', phone:13856776939, address:'安徽省亳州市蒙城县漆园办事处唐集街'},
    {name:'巢湖市苏湾镇自福猪肉铺', people:'赵自福', phone:13156599601, address:'巢湖市苏湾镇西大街农贸市场'},
    {name:'合肥瑶海区城伟猪肉经营部', people:'谢海东', phone:15105624175, address:'合肥市瑶海区马岗集贸市场'},
    {name:'巢湖市夏阁镇夏阁农贸市场黄村猪肉摊', people:'黄村', phone:13966337144, address:'合肥巢湖市夏阁镇夏阁农贸市场'}]}]
var searchlist=[{name:'来安县清流屠宰有限公司', people:'储成虎', phone:13909603339, address:'安徽省滁州市来安县城西门（清流市场院内）'},
{name:'安徽青拓屠宰机械制造有限公司', people:'龚斌', phone:13951777068, address:'马鞍山市博望区丹阳镇丹东工业园北'},
{name:'六安市叶集区宏旺屠宰有限公司', people:'韦启云', phone:15955991660, address:'六安市叶集区姚李镇双红村'},
{name:'马鞍山润飞屠宰机械制造有限公司', people:'姚晨', phone:13814137930, address:'马鞍山市博望区博望镇三杨开发区南'},
{name:'马鞍山优典屠宰机械设备制造有限公司', people:'吴章杰', phone:18851933995, address:'马鞍山市博望区博望镇九博科技园8号'},
{name:'安徽盈泰屠宰加工有限公司', people:'展永强', phone:18134603777, address:'安徽省宿州市砀山县经济开发区汇丰市场南200米'},
{name:'绩溪县岭北屠宰有限公司', people:'张幼明', phone:18605636097, address:'安徽省宣城市绩溪县长安镇镇头村田玕16号'},
{name:'太湖县安心屠宰加工有限公司', people:'吕鹏英', phone:13965813008, address:'太湖县经济开发区龙安村曹屋组421号'},
{name:'怀宁绿生屠宰有限公司', people:'汪俊斌', phone:13485871268, address:'安徽省安庆市怀宁县高河镇平安村'},
{name:'马鞍山明顺屠宰设备制造有限公司', people:'陈本武', phone:13814097145, address:'安徽省安庆市怀宁县高河镇平安村'},
{name:'太和县鑫聚屠宰有限公司', people:'韩园园', phone:18010998155, address:'安徽省阜阳市太和县旧县镇旧县街口向北路西13号'},
{name:'安徽安乐屠宰机械制造有限公司', people:'杨志', phone:13955557266, address:'马鞍山经济技术开发区阳湖路398号14栋4层'},{name:'合肥绿益食品有限公司', people:'谈社涛', phone:13705512237, address:'肥东县撮镇镇合肥商贸物流开发区喻闸路东侧'},
{name:'休宁县桑园腊肉加工厂', people:'孙志勇', phone:13625532108, address:'休宁县万安镇万新村双元8号'},
{name:'石台县沈家食品有限公司', people:'沈复新', phone:18956624200, address:'石台县矶滩乡沟丁村龙坡组'},
{name:'合肥市包河区慈云腊肉香肠饭店', people:'何东升', phone:13956083330, address:'安徽省合肥市包河区慈云村第四村民组36号'},
{name:'郎溪县飞鲤镇幸福好运家畜养殖家庭农场', people:'吴子英', phone:13170137682, address:'郎溪县飞鲤镇王村'},
{name:'合肥岭牧农产品有限公司', people:'谈世群', phone:13956040387, address:'安徽省合肥市经济技术开发区习友路与观海路交叉口18幢依澜雅居18幢2902室'},
{name:'芜湖宏洋食品有限公司', people:'胡晓宝', phone:13855349928, address:'安徽省芜湖市三山区芜湖绿色食品经济开发区'},{name:'涡阳县岳峰猪肉摊', people:'岳峰', phone:15956722385, address:'安徽省亳州市涡阳县青年路'},
{name:'全椒县德芳猪肉零售点', people:'唐德芳', phone:15055003418, address:'安徽省滁州市全椒县襄河镇南屏农贸城14组18号摊位'},
{name:'石台县小河镇莘田村猪肉铺', people:'郝加财', phone:13856870428, address:'安徽省池州市石台县小河镇莘田村'},
{name:'宿松县程岭乡猪肉批发点', people:'胡得全', phone:15212989388, address:'宿松县程岭乡程岭街10号'},
{name:'滁州市琅琊区潘记猪肉经营部', people:'潘小凤', phone:13705500962, address:'安徽省滁州市凤凰农贸产品大市场'},
{name:'亳州市谯城区王强猪肉经营部', people:'王跃庭', phone:13355675800, address:'城区新兴路126号新兴农贸市场内南门11号门面房'},
{name:'濉溪县许峰猪肉摊', people:'许峰', phone:18709852640, address:'安徽省淮北市濉溪县陈集乡罗集街'},
{name:'青阳县蓉城镇金平猪肉铺', people:'储成虎', phone:13909603339, address:'安徽省滁州市来安县城西门（清流市场院内）'},
{name:'蒙城县漆园办事处陈超猪肉销售点', people:'陈超', phone:13856776939, address:'安徽省亳州市蒙城县漆园办事处唐集街'},
{name:'巢湖市苏湾镇自福猪肉铺', people:'赵自福', phone:13156599601, address:'巢湖市苏湾镇西大街农贸市场'},
{name:'合肥瑶海区城伟猪肉经营部', people:'谢海东', phone:15105624175, address:'合肥市瑶海区马岗集贸市场'},
{name:'巢湖市夏阁镇夏阁农贸市场黄村猪肉摊', people:'黄村', phone:13966337144, address:'合肥巢湖市夏阁镇夏阁农贸市场'}]
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true,
    phone:''
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });

    this.setData({
      list: list,
      listCur: list[0]
    })

  },
  onReady() {
    wx.hideLoading()
  },
  formSubmit(e){
    console.log(e.detail.value.searchname)
    let keyWord=e.detail.value.searchname
    var len = searchlist.length;
    var arr = [];
    var reg = new RegExp(keyWord);
    for(var i=0;i<len;i++){
        //如果字符串中不包含目标字符会返回-1
        if(searchlist[i].name.match(reg)){

            arr.push(searchlist[i]);

        }

    }
    if(!arr.length){
        wx.showToast({  // 显示加载中loading效果 
            title: "未找到",
            icon:'error',
            mask: true  //开启蒙版遮罩
          });
    }else{
        wx.openLocation({ //​使用微信内置地图查看位置。
            latitude: 30.94622,//e.currentTarget.dataset.marker.latitude, //要去的纬度-地址
            longitude:  118.75634,//e.currentTarget.dataset.marker.longitude, //要去的经度-地址
            name: arr[0].name,
            address: arr[0].address
          })
    }
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  gomap(e){
      console.log(e)
    wx.openLocation({ //​使用微信内置地图查看位置。
        latitude: 30.94622,//e.currentTarget.dataset.marker.latitude, //要去的纬度-地址
        longitude:  118.75634,//e.currentTarget.dataset.marker.longitude, //要去的经度-地址
        name: e.currentTarget.dataset.id.name,
        address: e.currentTarget.dataset.id.address
      })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
            selected: 1
        })
    }
    },
    onShow(){
        this.tabBar()
    } 

})