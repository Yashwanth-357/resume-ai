import { GraduationCap, Plus, Trash2 } from "lucide-react";

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };

    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i != index);
    onChange(updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];

    updated[index] = { ...updated[index], [field]: value };

    onChange(updated);
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex item-cent gap-2 text-lg font-semibold text-gray-900">
            Educstion
          </h3>
          <p className="text-sm text-gray-500 ">Add your Education details</p>
        </div>
        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
        >
          <Plus className="size-4" /> Add Education
        </button>
      </div>
      {data.length === 0 ? (
        <div className="py-8 text-center text-gray-500">
          <GraduationCap className="mx-auto mb-3 h-12 w-12 text-gray-300" />
          <p>No education added yet.</p>
          <p className="text-sm">Click "Add Experience" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <div
              key={index}
              className="space-y-3 rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-start justify-between">
                <h4>Education #{index + 1}</h4>
                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  value={education.institution || ""}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  type="text"
                  placeholder="Institution Name"
                  className="px-3 py-2 text-sm "
                />
                <input
                  value={education.degree || ""}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  type="text"
                  placeholder="Degree (e.g., Bachelor's, Master's"
                  className="px-3 py-2 text-sm"
                />
                <input
                  value={education.field || ""}
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  placeholder="Field of Study"
                  type="text"
                  className="px-3 py-2 text-sm"
                />
                <input
                  value={education.graduation_date || ""}
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                  type="month"
                  className="px-3 py-2 text-sm"
                />
              </div>

              <input
                value={education.gpa || ""}
                onChange={(e) => updateEducation(index, "gpa", e.target.value)}
                placeholder="GPA (optinal)"
                type="text"
                className="px-3 py-2 text-sm"
              />
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
