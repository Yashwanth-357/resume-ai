// controller for creating a new resume
// POST: /api/resumes/create

import Resume from "../models/Resume";

export const createResume = async (res, req) => {
  try {
    const userId = req.userId;
    const { title } = req.body;
    //create new resumes

    const newResume = await Resume.create({ userId, title });
    //return succes message

    return res.status(200).json({
      meassage: "Resume created successfully",
      Resume: newResume,
    });
  } catch (error) {
    return res.status(400).json({ meassage: error.meassage });
  }
};

// controller for delete a new resume
// POST: /api/resumes/create

import Resume from "../models/Resume";

export const deleteResume = async (res, req) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    await Resume.findOneAndDelete({ userId, _id: resumeId });
    return res.status(200).json({
      meassage: "Resume deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({ meassage: error.meassage });
  }
};

// get user resume by id
// GET: /api/resumes/get

export const deleteResume = async (res, req) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ userId, _id: resumeId });
    if (!resume) {
      return res.status(404).json({
        meassage: "Resume not found",
      });
    }
    resume._v = undefined;
    resume.createdAt = undefined;
    resume.updateAt = undefined;
    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ meassage: error.meassage });
  }
};


// get resume by id public
// GET: /api/resumes/public

export const getPublicResumeById = async (res, req) => {
  try {
   
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ public:true, _id: resumeId });
    if (!resume) {
      return res.status(404).json({
        meassage: "Resume not found",
      });
    }
    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ meassage: error.meassage });
  }
};



