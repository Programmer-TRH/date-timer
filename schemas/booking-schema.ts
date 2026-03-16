import { z } from "zod";

export const bookingSchema = z.object({
  country: z.string().min(1, "Please select a country"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().min(1, "Please select a city"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
