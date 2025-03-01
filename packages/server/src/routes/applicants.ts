import express from "express";
import {
  uploadResume,
  getApplicants,
  filterApplicants,
} from "../controllers/applicants";

const router = express.Router();

router.post("/:jobPostId/upload", uploadResume);
router.get("/:jobPostId", getApplicants);
router.post("/:jobPostId/filter", filterApplicants);

export default router;
