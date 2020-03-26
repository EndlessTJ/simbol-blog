export interface Article{
  title: string,
  content: string,
  brief: string,
  createAt: Date,
  updateAt: Date,
  comments?: Array<string>,
  tags?:Array<string>,
  mate:{
    claps?: number,
    views?: number
  }
}