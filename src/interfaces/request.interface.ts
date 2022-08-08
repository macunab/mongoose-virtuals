import { Types } from "mongoose";

export interface IRequest {
    name: string;
    description: string;
    owner: Types.ObjectId;
}