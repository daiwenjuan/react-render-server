/**
 *  Created by daiwenjuan on 2018/7/12 下午7:44.
 */
var userName = 'xiaoming'
var timeStamp = Date.parse(new Date())
var jsonDatabase = {
  'loginName': userName,
  'loginTime': timeStamp
}
var db = connect('log')
db.login.insert(jsonDatabase)
print('[demo]log print success')