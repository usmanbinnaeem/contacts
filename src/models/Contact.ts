import mongoose, { Document, Schema } from 'mongoose';
import { IContact } from '../types/contact';

const ContactSchema: Schema = new Schema({
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    tags: [String],
    source: String,
    company: String,
    designation: String,
    website: String
  });

  ContactSchema.index({ name: 'text', mobileNumber: 'text', company: 'text', designation: 'text', source: 'text', website: 'text' });
  export default mongoose.model<IContact>('Contact', ContactSchema);