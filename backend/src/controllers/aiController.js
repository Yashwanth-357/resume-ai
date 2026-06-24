import { json } from "express";
import Resume from "../models/Resume.js";
import ai from "../config/ai.js";

// controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content: `You are an expert resume writer. Your task is to rewrite and enhance the professional summary of a resume. Generate a concise, compelling, and ATS-friendly summary in 1–2 sentences that highlights the candidate's key skills, experience, strengths, and career objectives. Return only the improved summary as plain text without explanations, formatting, headings, quotation marks, or multiple options.`,
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    const statusCode = error.status || 500;
    console.error("AI API Error:", error.message);
    return res.status(statusCode).json({ message: error.message });
  }
};

// controller for enhancing a resume's job summary
// POST: /api/ai/enhance-job-sum

export const enhanceJobDesription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content: `You are an expert resume writer. Your task is to rewrite and enhance a resume job description. Make it professional, concise, impactful, and ATS-friendly while preserving the original meaning and factual information. Use strong action verbs, highlight responsibilities, achievements, and relevant skills when mentioned, but do not invent or exaggerate experience. Return only the enhanced job description as plain text without explanations, headings, bullet points (unless the input uses them), quotation marks, or multiple options.`,
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    const statusCode = error.status || 500;
    console.error("AI API Error:", error.message);
    return res.status(statusCode).json({ message: error.message });
  }
};

// controller for uploading a resume to the database
// POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;
    if (!resumeText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const systemPrompt =
      "Your are an expert AI agent to extract data from resume.";
    const usrerPrompt = `extract data from this resume:${resumeText}
    Provide data in the folling JSON format with no additional text befour or 
    after:{
        professinal_summary: {
      type: String,
      default: "",
    },
    skills: [
      {
        type: String,
      },
    ],

    personal_info: {
      image: {
        type: String,
        default: "",
      },
      full_name: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },
      linkedin: {
        type: String,
        default: "",
      },
      website: {
        type: String,
        default: "",
      },
    },
    exprience: [
      {
        company: { type: String },
        position: { type: String },
        start_date: { type: String },
        end_date: { type: String },
        descripation: { type: String },
        is_current: { type: Boolean },
      },
    ],
    project: [
      {
        name: { type: String },
        type: { type: String },
        descripation: { type: String },
      },
    ],
    education: [
      {
        institution: { type: String },
        degree: { type: String },
        field: { type: String },
        graduation_date: { type: String },
        gpa: { type: String },
      },
    ],}`;

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: usrerPrompt,
        },
      ],
      responce_format: { type: "json_object" },
    });
    const extractedData = response.choices[0].message.content;
    const paramsData = JSON.parse(extractedData);
    const newResume = await Resume.create({ userId, title, ...paramsData });
    res.json({ resumeId: newResume._id });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
