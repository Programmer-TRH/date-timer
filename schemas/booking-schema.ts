import { z } from "zod";

export const bookingSchema = z.object({
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
