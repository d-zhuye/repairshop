import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { tickets } from "@/db/schema";
import { z } from "zod/v4";

export const insertTicketSchema = createInsertSchema(tickets, {
  id: z.union([z.number(), z.literal("(New)")]),
  title: z.string().min(1, {
    error: "Title is required.",
  }),
  description: z.string().min(1, {
    error: "Description is required.",
  }),
  tech: z.email({ error: "Invalid email address." }),
});

export const selectTicketSchema = createSelectSchema(tickets);

export type insertTicketSchemaType = z.infer<typeof insertTicketSchema>;
export type selectTicketSchemaType = z.infer<typeof selectTicketSchema>;
