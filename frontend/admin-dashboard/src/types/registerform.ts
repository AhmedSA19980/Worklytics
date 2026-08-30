import { userSchema } from "@/schemas/user";
import z from "zod";

export type RegisterFormData = z.infer<typeof userSchema>