import Pictures from "./Pictures"
import User from "./UserData"

const DummyPostData=[
   {
      id:0,
      name:"You",
      profilepic:User.profilepic,
      Post:{
        pic:User.profilepic,
        time:"35 minutes ago"
     },
   },
    {
       id:1,
       name:"john",
       profilepic:Pictures.person1,
       Post:{
        Message:"The quick Brown Fox Jumps Over The Lazy Dog",
        time:"5 hour ago"
     },
    },
    {
        id:2,
        name:"tom",
        profilepic:Pictures.person2,
        Post:{
            Message:"Hellow is anyone online here!",
            time:"7 hour ago"
         },
     },
     {
        id:3,
        name:"man",
        profilepic:Pictures.person3,
        Post:{
            pic:Pictures.person5,
            time:"8 hour ago"
         },
     },
     {
        id:4,
        name:"bro",
        profilepic:Pictures.person4,
        Post:{
            Message:"The quick Brown Fox Jumps Over The Lazy Dog",
            time:"9 hour ago"
         },
     },
     {
        id:5,
        name:"john",
        profilepic:Pictures.person5,
        Post:{
            Message:"LOrem ispoum aosij asdo wqe han adaf nas narim mais nfeis oasdn namie asdn name ",
            time:"1 day ago"
         },
      
     },
]
export default DummyPostData