import z from "zod";
import { email  } from "./validators/email";



export const sendingemailSchema = z.object({

    email:email,
});