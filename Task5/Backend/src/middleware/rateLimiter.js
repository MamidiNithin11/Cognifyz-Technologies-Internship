import ratelimit from "../Config/upstash.js";

const rateLimiter=async(req,res,next)=>{
    try{
        const {success}=await ratelimit.limit("my-limit-key");
        if(!success){
            return res.status(429).json({message:"Too many requests"});
        }
        next();
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export default rateLimiter; 