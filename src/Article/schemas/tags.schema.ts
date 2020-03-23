import * as mongoose from 'mongoose';


// 暂时定义最简单的schema，在更具后续功能考虑是否修改
export const TagsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  createAt: {type: Date, required: true, default: Date.now},
})