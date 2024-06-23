import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userSchema.js"
import jwt from 'jsonwebtoken'



//Authenticate user
//POST http://localhost:port/users/login
//Access public
const authUser=asyncHandler(async(req,res)=>{
    console.log(req.body)
    console.log(process.env.JWT_SECRET)
    console.log(process.env.NODE_ENV)
    const {email,password}=req.body;
  const user=await User.findOne({email});
  if(user && (await user.matchPassword(password))){
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });

    //set jwt as http only
    res.cookie('jwt',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV !== 'development',
        sameSite:'strict',
        maxAge:30 * 24 * 60 * 60 *1000
    })
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,

    });
    }else{
        res.status(401);
        throw new Error("Invalid email or password");
        }
  
})

//Register user
//POST http://localhost:port/users/register
//Access public
const registerUser=asyncHandler(async(req,res)=>{
    res.send("register user");
    })

    //logout user remove cookie
    //POST http://localhost:port/users/logout
    //Access private
    const logoutUser=asyncHandler(async(req,res)=>{
        res.send("logout user")
        // res.cookie('token', 'none', {
        //     expires: new Date(Date.now() + 10 * 1000),
        //     httpOnly: true
        //     });
        //     res.status(200).json({ success: true });
                })

                //get user profile
                //Get localhost:port/users/profile
                //Access private
     const getUserProfile=asyncHandler(async(req,res)=>{
            res.send("get user profile");
    });

                //update user profile
                //PUT localhost:port/users/profile
                //Access private
     const updateUserProfile=asyncHandler(async(req,res)=>{
          res.send("update user profile");
     });

                //get all users
                //GET localhost:port/users/
                //Access private/Admin
        const getUsers=asyncHandler(async(req,res)=>{
            res.send("get all users");
       });

                //delete user
                //DELETE localhost:port/users/:id
                //Access private/Admin
        const deleteUser=asyncHandler(async(req,res)=>{
            res.send("delete user");
        });

                //get user by Id
                //GET localhost:port/users/:id
                //Access private/Admin
       const getUserById=asyncHandler(async(req,res)=>{
                    res.send("get user by id");
       })

                //update user
                //Put localHost:port/users/:id
                //Access private/Admin

                const updateUser=asyncHandler(async(req,res)=>{
                    res.send("update user");
                })

                export {
                    authUser,
                    registerUser,
                    logoutUser,
                    getUserProfile,
                    updateUserProfile,
                    getUsers,
                    deleteUser,
                    getUserById,
                    updateUser
                }