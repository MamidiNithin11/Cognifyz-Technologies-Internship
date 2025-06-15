import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config();


const ratelimit=new Ratelimit({
    redis:Redis.fromEnv(), //redis client
    limiter:Ratelimit.slidingWindow(10,"10s"), //10 requests per 10 seconds
});

export default ratelimit;