import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function POST(req) {
    try {
        const {name, email, password} = await req.json ();
        const hashedPassword = await bcrypt.hash(password, 10);

        // await connectMongoDB ();
        // await User.create({ name, email, password: hashedPassword });

      
        const user = new User({name,email,password:hashedPassword})
        const newUser = await user.save()

        console.log(newUser)
        // console.log("Name:", name, "Email:", email, "Password:", password);

        return NextResponse.json({message:"User registered"}, {status:201});
        } catch (error) {
            console.log(error)
            return NextResponse.json({message:"An error occured while registeration "}, {status:500});

    }
} 