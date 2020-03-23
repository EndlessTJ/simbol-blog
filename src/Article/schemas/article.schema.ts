import * as mongoose from 'mongoose';
const objectId = mongoose.ObjectId;


// 暂时定义最简单的schema，在更具后续功能考虑是否修改
export const ArticleSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  brief: {type: String, required: true},
  createAt: {type: Date, required: true, default: Date.now},
  updateAt: {type: Date, required: true, default: Date.now},
  state:{type: String, default: 'draft'},
  comments: [objectId],
  tags:[objectId],
  mate:{
    claps: {type: Number, default: 0},
    views: {type: Number, default: 0}
  }

})