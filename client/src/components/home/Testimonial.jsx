import { BookUserIcon} from "lucide-react"
import Title from "./Title"


const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
        <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-400/10 border border-indigo-200 rounded-full px-6 py-1.5">
        <BookUserIcon className="size-4.5 stroke-indigo-600" />
        <span>Testimonials</span>
      </div>
      <Title
        title={"Trusted by Job Seekers, Students, and Professionals"}
        description={
          "Discover how ResumeAI has helped users create stronger resumes, improve ATS scores, and confidently apply for their dream jobs with AI-powered guidance."
        }
      />


        
    </div>
  )
}

export default Testimonial