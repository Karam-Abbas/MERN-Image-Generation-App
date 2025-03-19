import mongoose from 'mongoose';
const { Schema } = mongoose;

const imageSchema = new Schema({
  prompt: String,
  image: String,
});

export default mongoose.model('image', imageSchema);
