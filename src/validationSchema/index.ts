import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name can't exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(500, "Message can't exceed 500 characters"),
});