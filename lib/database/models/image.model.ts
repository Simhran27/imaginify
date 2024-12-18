/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, model, models, Schema } from "mongoose";

//import { ObjectId } from 'mongoose';

export interface IImage extends Document{
    title: string; // Required string field
    transformationType: string; // Required string field
    publicId: string; // Required string field
    secureURL: string; // Required URL type
    width?: number; // Optional number field
    height?: number; // Optional number field
    config?: object; // Optional object field
    transformationUrl?: string; // Optional URL field
    aspectRatio?: string; // Optional string field
    color?: string; // Optional string field
    prompt?: string; // Optional string field
    author:{
        _id:string;
        firstName:string;
        lastName:string;
    } // Refers to a 'User' schema, must be an ObjectId
    createdAt: Date; // Date of creation, defaults to current date
    updatedAt: Date; // Date of last update, defaults to current date
}
const ImageSchema=new Schema({
    title:{type:String,required:true},
    transformationType:{type:String,required:true},
    publicId:{type:String,required:true},
    secureURL:{type:String,required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:String},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
});

//to turn the above schema into a model
const Image=models?.Image || model("Image",ImageSchema);

export default Image;

