import React from 'react'
import {SubmitHandler , useForm} from 'react-hook-form';
import { useState } from 'react';

type FormFields = {
  email:string;
  firstName: string;
  lastName : string;
  gender: string;
  year: string;
  branch: string;
  subject: string;
  phone : string;
  queries:string;
}
export const Form = () => {
  const {register, handleSubmit} = useForm<FormFields>();
  const onSubmit : SubmitHandler<FormFields> = (data) => {
    console.log(data);
  }
  return (
    <div className='container '>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <h6>Name</h6>
        <input {...register("firstName" , {
          required : true
        })} 
        type='text' 
        placeholder='First Name'/>

        <input {...register("lastName" , {
          required : true
        })} 
        type='text' 
        placeholder='Last Name'/>

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

        <h6>Subject</h6>
        <select {...register("subject")}>
        <option value="EM">Engineering mechanics</option>
        <option value="ED">Engineering drawings/ graphic</option>
        <option value="BEE">Basic of electronics Basic Electrical Engineering </option>
        <option value="Maths-1">Maths-1</option>
        <option value="Maths-2">Maths-2</option>
        </select>

        <h6>E-mail</h6>
        <input {...register("email" , {
          required : true
        })} type='text' placeholder='example@example.com'/>

        <h6>Phone number</h6>
        <input {...register("phone" , {
          required : true
        })} type='text' placeholder='+91 123456789'/>

        <h6>Further queries</h6>
        <textarea id="textArea" {...register("queries")}/>

        <br/><button type='submit'>Submit</button> 
      </form>
    </div>
  )
}