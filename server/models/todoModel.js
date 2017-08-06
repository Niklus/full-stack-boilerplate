import mongoose, {Schema} from 'mongoose';

const todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

const todoModel = mongoose.model('Todos', todoSchema);

export default  todoModel;