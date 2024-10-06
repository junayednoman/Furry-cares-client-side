import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Invalid email address"),
  password: z.string({ required_error: "Password is required" }),
});

export const resetPassSchema = z.object({
  password: z.string({ required_error: "Password is required" }),
});

export const registrationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email("Invalid email address"),
  password: z.string({
    required_error: "Password is required",
  }),
  designation: z.string({ required_error: "Designation is required" }),
})

export const subscriptionSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email("Invalid email address"),
})