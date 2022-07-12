import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;

// 0. mongoose 연결하기
// 1. 스키마를 만들기
// 2. 스키마를 사용하는 개체 만들기 (model method 사용)
// model 메서드를 사용할 경우 schema 복사본이 만들어진다.
