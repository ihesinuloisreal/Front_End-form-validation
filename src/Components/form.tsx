import React from 'react'
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

type formData = {
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    password: String,
    confirmPassword: String
  };

export const Form = () => {
    const schema: ZodType<formData> = z.object({
        firstName: z.string().min(2).max(35),
        lastName: z.string().min(2).max(35),
        email: z.string().email(),
        age: z.number().min(18).max(70),
        password: z.string().min(6).max(20),
        confirmPassword: z.string().min(6).max(20),
      }).refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match",
        path: ["confirmPassword"],
      });
    
    
      const {
        register, 
        handleSubmit,
        formState: {errors}
      } = useForm<formData>({resolver: zodResolver(schema)});
      const subbmitData = (data:formData) =>{
        console.log("IT WORKED", data)
      }
  return (
    <div>
        <form onSubmit={handleSubmit(subbmitData)}>
        <label htmlFor="">FirstName: </label>
        <input type="text" {...register("firstName")}/>
        {errors.firstName && <span> {errors.firstName.message} </span>}
        <label htmlFor="">LastName: </label>
        <input type="text" {...register("lastName")} />
        {errors.lastName && <span> {errors.lastName.message} </span>}
        <label htmlFor="">Email: </label>
        <input type="email" {...register("email")}/>
        {errors.email && <span> {errors.email.message} </span>}
        <label htmlFor="">Age: </label>
        <input type="number" {...register("age", {valueAsNumber: true})}/>
        {errors.age && <span> {errors.age.message} </span>}
        <label htmlFor="">Password: </label>
        <input type="password" {...register("password")}/>
        {errors.password && <span> {errors.password.message} </span>}
        <label htmlFor="">Confirm Password</label>
        <input type="password" {...register("confirmPassword")}/>
        {errors.confirmPassword && <span> {errors.confirmPassword.message} </span>}

        <input type="submit" />
      </form>
    </div>
  )
}

