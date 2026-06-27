import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../configs/api";
import ResumePreview from "../components/ResumePreview";
import Loader from "../components/Loader";
import { ArrowLeftIcon } from "lucide-react";

const Preview = () => {
  const { resumeId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadResume = async () => {
      try {
        setIsLoading(true);
        setError("");
        const { data } = await api.get(`/api/resumes/public/${resumeId}`);
        if (isMounted) {
          setResumeData(data.resume || null);
        }
      } catch (err) {
        if (isMounted) {
          setResumeData(null);
          setError(err?.response?.data?.message || "Resume not found or is not public.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (resumeId) {
      loadResume();
    }

    return () => {
      isMounted = false;
    };
  }, [resumeId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!resumeData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 text-center">
        <p className="text-4xl font-semibold text-slate-500">
          {error || "Resume not found 🤡"}
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-full bg-indigo-500 px-6 py-2 text-white transition-colors hover:bg-indigo-600"
        >
          <ArrowLeftIcon className="mr-2 size-4" />
          Go to home page
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-3xl py-10">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  );
};

export default Preview;
