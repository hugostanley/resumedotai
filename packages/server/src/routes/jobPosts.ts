import express from "express";
import {
  createJobPost,
  getJobPost,
  updateJobPost,
  deleteJobPost,
  analyzeJobPost,
} from "../controllers/jobPosts";

const router = express.Router();

router.post("/", createJobPost);
router.get("/:id", getJobPost);
router.put("/:id", updateJobPost);
router.delete("/:id", deleteJobPost);
router.post("/:id/analyze", analyzeJobPost);

export default router;
