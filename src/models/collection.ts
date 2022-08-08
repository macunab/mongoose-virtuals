import { Document, model, Schema } from "mongoose";
import { ICollection } from '../interfaces/collection.interface';

const collectionSchema = new Schema({
    name: String,
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
});

collectionSchema.virtual('requests', {
    ref: 'Request',
    localField: '_id',
    foreignField: 'owner'
});

const collectionModel = model<ICollection & Document>('Collection', collectionSchema);

export default collectionModel;