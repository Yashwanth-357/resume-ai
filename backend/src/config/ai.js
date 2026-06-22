import OpenAI from "openai";

const ai = new OpenAI({
    apiKey: process.env.OPENAI_BASE_URI,
    baseURL: process.env.OPENAI_BASE_URI,
    
});

export default ai