
import mongoose from "mongoose";
const messageModel = mongoose.Schema({
    sender:{
        type:mongoose.Schema.types.objectId,ref:"User"
    },
    content:{type:String,type:true},
    chat:{
        type:mongoose.Schema.types.objectId,ref:"Chat"
    },
     
});

const Message =mongoose.model("Message", messageModel);

export default Message ;