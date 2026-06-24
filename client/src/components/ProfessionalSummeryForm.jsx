import { Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import api from "../configs/api";
import toast from "react-hot-toast";

const ProfessionalSummeryForm = ({ data, onChange, setResumeData }) => {
  const { token } = useSelector((state) => state.auth);
  const [isGenerateing, setIsGenerateing] = useState(false);

  const generateSummary = async () => {
    try {
      setIsGenerateing(true);
      const prompt = `enhance my professional summary"${data}"`;
      const responce = await api.post(
        "/api/ai/enhance-pro-sum",
        { userContent: prompt },
        { headers: { Authorization: token } },
      );
      setResumeData((prev) => ({
        ...prev,
        professional_summary: responce.data.enhancedContent,
      }));
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsGenerateing(false);
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex item-cent gap-2 text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>
          <p className="text-sm text-gray-500 ">
            Add summary for you resume here
          </p>
        </div>
        <button
          disabled={isGenerateing}
          onClick={generateSummary}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
        >
          {isGenerateing ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Sparkles className="size-4" />
          )}
          {isGenerateing ? "Enhancing..." : "AI Enhance"}
        </button>
      </div>
      <div className="mt-6">
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          placeholder="Craft a compelling professional summary that showcases your skills, experience, accomplishments, and career aspirations to make a strong first impression."
          className="w-full p-3 px-4 mt-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
        />
        <p className="mx-auto max-w-4/5 text-center text-xs text-gray-500">
          <span className="font-medium">Tip:</span> Keep your summary concise
          (3–4 sentences) and highlight your most relevant skills, achievements,
          and career goals.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummeryForm;
