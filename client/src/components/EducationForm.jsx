const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEucation = {
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
  return <div>EducationForm</div>;
};

export default EducationForm;
