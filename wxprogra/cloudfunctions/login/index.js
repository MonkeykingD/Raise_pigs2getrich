// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event) => {
    const {nickName,avatarUrl,gender}=event
    const {OPENID} = cloud.getWXContext()
    const db=cloud.database()
    const userInfo=db.collection("userInfo")
    const {data} =await userInfo.where({
        _openId:OPENID
    }).get()
    if(data.length===0){
        const {_id}= await userInfo.add({
            data:{
                nickName,
                avatarUrl,
                gender,
                _openId:OPENID
            }
        })
        const user=await userInfo.doc(_id).get()
        return{
            data:user.data
        }
    }else{
        return {
            data:data[0]
         }
    }


}