import { Url } from "../models/url.model.js";

export const getOriginalUrl= async (req,res)=>{
    const shorturl=req.params.shortkey;
    const original=await Url.findOne({shortkey : shorturl});
    console.log(original);
    if(original){
        res.redirect(original.LongUrl);
    }
    else{
        res.json({message : 'WRONG URL'});;
    }
}
