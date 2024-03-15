import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  year: string;
  branch: string;
  phone: string;
  queries: string;
  checkboxOptions: string[];
};

const subjects = [
  "Maths-1",
  "Maths-2",
  "Engineering Graphics/Desing",
  "Basic Electrical Engineering",
  "Engineering Mechanics",
  "Maths-3",
  "Maths-4",
  "Electrical network/ circuit theory/ network theory (EN/NT/CTN)",
  "Control system (CS)",
  "Digital logic design/ digital system design/ digital circuits design (DSD/ DLDA/DCD/LD)",
  "Electronics circuit design (EDC/ADC/ED)",
  "Signal and system (SS)",
  "Linear integrated circuit/ Integrated circuit (LIC/DLIC/IC).",
  "Electromagnetics (EME)",
  "Digital signal processing/ discrete time signal processing (DSP/DTSP)",
  "Signal processing (SP)",
  "Very large scale integrated circuit (VLSI)",
  "image processing (IP)",
  "Robotics",
  "CMOS technology"
];

export const Form = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    // Filter out unchecked checkboxes
    const selectedOptions = data.checkboxOptions.filter(option => typeof option === "string");
    console.log(selectedOptions);
    console.log(data);
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6>Name</h6>
        <input
          {...register("firstName", { required: true })}
          type='text'
          placeholder='First Name'
        />

        <input
          {...register("lastName", { required: true })}
          type='text'
          placeholder='Last Name'
        />

        <h6>Gender</h6>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        <h6>Current Year</h6>
        <select {...register("year")}>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
        </select>

        <h6>Branch</h6>
        <select {...register("branch")}>
          <option value="Computer">CS/IT/CE</option>
          <option value="Electrical">EC/EXTC</option>
          <option value="AI/DS">AI/DS</option>
          <option value="Mechanical">MECH</option>
        </select>

        <h6>E-mail</h6>
        <input
          {...register("email", { required: true })}
          type='text'
          placeholder='example@example.com'
        />

    <div>
      <h6>Subjects</h6>
          {subjects.map((option, index) => (
            <label className="checkboxLabel" key={index}>
              <input className=''
                type="checkbox"
                {...register(`checkboxOptions.${index}`)}
                value={option}
              />
              {option}
            </label>
          ))}
    </div>

      <div>
  <h6>Phone number</h6>
  <input
    {...register("phone", { required: true })}
    type='text'
    placeholder='+91 xxxxxxxxxx'
  />
</div>

        <h6>Further queries</h6>
        <textarea id="textArea" {...register("queries")} />

        <br /><button type='submit'>Submit</button>
      </form>
    </div>
  );
};
