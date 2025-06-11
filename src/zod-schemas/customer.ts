import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";
import { z } from "zod/v4";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: z.string().min(1, { error: "First name is required" }),
  lastName: z.string().min(1, { error: "Last name is required" }),
  address1: z.string().min(1, {
    error: "Address is required",
  }),
  city: z.string().min(1, { error: "City is required" }),
  state: z.string().length(2, {
    error: "Must be in two-letter format. Example: CA, NY, FL.",
  }),
  email: z.email("Email address is required."),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, {
    error: "Invalid zip code. Use format 12345 or 12345-7890",
  }),
  phone: z.e164(),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type selectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;
