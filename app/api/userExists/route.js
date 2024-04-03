import { connectMongoDB } from "@/lib/mongodb";

export async function POST (req) {
    try {
        await connectMongoDB();
        const { email } = await req.json ();
        const user = await User.findOne({email}).select("_id");
        console.log("user: ", user);
    } catch (error) {
        
    }
}