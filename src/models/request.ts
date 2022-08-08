import { Document, model, Schema } from "mongoose";
import { IRequest } from "../interfaces/request.interface";


const requestSchema = new Schema({
    name: String,
    description: String,
    owner: {
        ref: 'Collection',
        type: Schema.Types.ObjectId
    }
});

const requestModel = model<IRequest & Document>('Request', requestSchema);

export default requestModel;