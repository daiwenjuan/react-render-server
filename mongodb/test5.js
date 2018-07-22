/**
 *  Created by daiwenjuan on 2018/7/16 22:44.
 */
//db.workmate.find(
//  {"skill.skillOne": "HTML+CSS"},
//  {"name": true, "skill.skillOne": true}
//)
db.workmate.find(
  {age:{$lte:30,$gte:25}},
  {name:1,"skill.skillOne":1,age:1,_id:0}
)