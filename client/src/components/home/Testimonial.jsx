import { BookUserIcon } from "lucide-react";
import Title from "./Title";
import { testimonials, columns } from "../../constants/Users";


const Testimonial = () => {

  const renderCard = (testimonial, index) => (
    <div
      key={`${testimonial.id}-${index}`}
      className="bg-linear-to-b bg-indigo-100 shadow-lg shadow-indigo-500/50 border-slate-800  rounded-xl p-6 mb-4 hover:border-slate-700 transition-all duration-300"
    >
      <div className="mb-5">
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="black"
            strokeOpacity=".7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z" />
          </g>
        </svg>
      </div>
      <p className="text-sm text-gray-700-400 mb-5 leading-relaxed">
        {testimonial.description}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="size-9 rounded-full border border-slate-800"
        />
        <div>
          <p className="text-sm text-black">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
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
      <div className="bg-white flex flex-col items-center justify-center py-16 px-4">
        <div className="relative w-full max-w-6xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className={col.className}>
                {[
                  ...testimonials.slice(col.start, col.end),
                  ...testimonials.slice(col.start, col.end),
                ].map((testimonial, index) => renderCard(testimonial, index))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
