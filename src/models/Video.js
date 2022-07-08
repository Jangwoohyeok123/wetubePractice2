import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{type: String}],
  meta:{
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;

// 0. mongoose 연결하기
// 1. 스키마를 만들기
// 2. 스키마를 사용하는 개체 만들기 (model method 사용)
// model 메서드를 사용할 경우 schema 복사본이 만들어진다. 