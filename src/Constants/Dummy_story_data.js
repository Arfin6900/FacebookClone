import Pictures from "./Pictures"
import User from "./UserData"

const DummyData=[
   {
      id:0,
      name:"You",
      profilepic:User.profilepic,
      stories:[]
   },
    {
       id:1,
       name:"john",
       profilepic:Pictures.person1,
       stories:[
         {
            pic:Pictures.person4,
            time:"1 hour ago"
         },
         {
            text:"hello world",
            time:"1 hour ago"
         },
         
              
       ]
    },
    {
        id:1,
        name:"tom",
        profilepic:Pictures.person2,
        stories:[
         {
            text:"hello world",
            time:"1 hour ago"
         },
         {
            pic:Pictures.person4,
            time:"1 hour ago"
         },
             
       ]
     },
     {
        id:1,
        name:"man",
        profilepic:Pictures.person3,
        stories:[
         {
            text:"Good Morning",
            time:"1 hour ago"
         },
         {
            pic:Pictures.person4,
            time:"1 hour ago"
         },
              
       ]
     },
     {
        id:1,
        name:"bro",
        profilepic:Pictures.person4,
        stories:[
         {
            text:"happy Independence day",
            time:"1 hour ago"
         },
         {
            pic:Pictures.person4,
            time:"1 hour ago"
         },
               
       ]
     },
     {
        id:1,
        name:"john",
        profilepic:Pictures.person5,
        stories:[
         {
            text:"Going to long trip ",
            time:"1 hour ago"
         },
         {
            pic:Pictures.person4,
            time:"1 hour ago"
         },
            
       ]
     },
]
export default DummyData