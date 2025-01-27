import { hashPassword,comparePassword } from "./../helpers/authhelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
export const registerController =async(req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body
       if(!name){
            return res.send({message: 'Name is required'})
        }
        if(!email){
            return res.send({message: 'Email is required'})
        }
        if(!password){
            return res.send({message: 'Password is required'})
        }
        if(!phone){ 
            return res.send({message: 'Phone is required'})
        }
        if(!address){
            return res.send({message: 'Address is required'})
        }
        if(!answer){
            return res.send({message: 'Answer is required'})
        }
        // check for existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:false,
                message: 'Already Registered'
            })
        }
        // Register user
        const hashedPassword = await hashPassword(password)

        const user= await new userModel({name,email,phone,address,password:hashedPassword,answer}).save();
        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in registration',
            error
        })
    }
}

export const loginController=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email||!password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registerd"
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }
        const token=JWT.sign({_id:user._id},process.env.SECRET,
            {expiresIn:"7d",})
            res.status(200).send({
                success:true,
                message:"User Login Successfully",
                user:{
                    name:user.name,
                    email:user.email,
                    phone:user.phone,
                    address:user.address,
                    role:user.role
                },
                token,
            })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error Occured',
            error
        })
    }
}

export const forgotPasswordController=async(req,res)=>{
    try {
        const{email,answer,newPassword}=req.body;
        if(!email){
            res.status(400).send({message:'Email is required'})
        }
        if(!answer){
            res.status(400).send({message:'answer is required'})
        }
        if(!newPassword){
            res.status(400).send({message:'New Password is required'})
        }
        const user = await userModel.findOne({email,answer})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Wrong Email or answer"
            })
        }
        const hashed =await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Something went wrong',
            error
        })
    }
}

export const testController=(req,res)=>{
    try {
        res.send("Protected Routes")
    } catch (error) {
        console.log(error);
        res.send({error})
    }
}