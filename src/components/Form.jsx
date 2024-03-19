import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const subjects = [
  "Maths-1",
  "Maths-2",
  "Engineering Graphics/Design",
  "Basic Electrical Engineering",
  "Engineering Mechanics",
  "Maths-3",
  "Maths-4",
  "Electrical network/ circuit theory/ network theory (EN/NT/CTN)",
  "Control system (CS)",
  "Digital logic design/ digital system design/ digital circuits design (DSD/ DLDA/DCD/LD)",
  "Electronics circuit design (EDC/ADC/ED)",
  "Signal and system (SS)",
  "Linear integrated circuit/ Integrated circuit (LIC/DLIC/IC)",
  "Electromagnetics (EME)",
  "Digital signal processing/ discrete time signal processing (DSP/DTSP)",
  "Signal processing (SP)",
  "Very large scale integrated circuit (VLSI)",
  "image processing (IP)",
  "Robotics",
  "CMOS technology",
];

export const Form = () => {
  const { register, handleSubmit , reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_b9kcp18",
        "template_zt441ac",
        "#myForm",
        "yDUofkTF6aoIqQiG_"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Form has been submitted");
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Form could not be submitted , Please try again");
        }
      );
      reset();
  };

  return (
    <div id="form" className="formContainer">
      <span className="inputHeader">Contact Us!</span>
      <form onSubmit={handleSubmit(onSubmit)} id="myForm">
        <label>Name</label>
        <input
          {...register("from_name", { required: true, maxLength: 30 })}
          type="text"
          placeholder="Full Name"
        />

        <label>E-mail</label>
        <input
          {...register("user_email", {
            required: true,
            pattern: /[a-z A-Z 0-9]@[a-z A-Z 0-9].[a-z]{2,}/,
          })}
          type="email"
          placeholder="example@example.com"
        />

        <label>
          Contact Number <span style={{ color: "red" }}>*</span>
        </label>
        <input
          {...register("contact_number", { required: true })}
          type="text"
          placeholder="Enter your contact number"
        />

        <label>Further queries</label>
        <textarea
          {...register("message")}
          placeholder="Enter your message here"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
