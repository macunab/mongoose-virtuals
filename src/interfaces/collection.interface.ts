import { Types } from "mongoose";

export interface ICollection {
    _id: string;
    name: string;
    user: Types.ObjectId;
}