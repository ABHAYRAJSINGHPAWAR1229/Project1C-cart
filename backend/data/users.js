import bcrypt from 'bcryptjs'

const users=[{
    name:'Abhay',
    email:'abhayrajsinghpawar@gmail.com',
    password:bcrypt.hashSync('Rajat@1229',10),
    isAdmin:true
},{
    name:'Abhimanyu',
    email:'abhimanyusinghpawar@gmail.com',
    password:bcrypt.hashSync('Rajat@1229',10),
    isAdmin:true
},{
    name:'Arpan',
    email:'arpankumar@gmail.com',
    password:bcrypt.hashSync('1234',10),
    isAdmin:false
},{
    name:'chaitanya',
    email:'chaitanya@gmail.com',
    password:bcrypt.hashSync('1234',10),
    isAdmin:false
}]

export default users