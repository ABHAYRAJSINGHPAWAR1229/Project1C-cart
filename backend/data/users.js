import bcrypt from 'bcryptjs'

const users=[{
    name:'Abhay',
    email:'abhayrajsinghpawar@gmail.com',
    password:bcrypt.hashSync('1229',10),
    addharNumber:'445285407791',
    contactNumber:'8737801229',
    address:'kateli banglow post neri kalan sitapur',
    isAdmin:true
},{
    name:'Abhimanyu',
    email:'abhimanyusinghpawar@gmail.com',
    password:bcrypt.hashSync('1229',10),
    addharNumber:'445285407792',
    contactNumber:'8737801230',
    address:'kateli banglow post neri kalan sitapur',
    isAdmin:true
},{
    name:'Arpan',
    email:'arpankumar@gmail.com',
    password:bcrypt.hashSync('1234',10),
    addharNumber:'445285407793',
    contactNumber:'8737801231',
    address:'kateli banglow post neri kalan sitapur',
    isAdmin:false
},{
    name:'chaitanya',
    email:'chaitanya@gmail.com',
    password:bcrypt.hashSync('1234',10),
    addharNumber:'445285407794',
    contactNumber:'87378012232',
    address:'kateli banglow post neri kalan sitapur',
    isAdmin:false
}]

export default users