import { z } from "zod";

export const bookingSchema = z.object({
  country: z
    .string({
      message: "Please select a country",
    })
    .min(1, "Please select a country"),
  state: z
    .string({
      message: "Please select a state",
    })
    .min(1, "Please select a state"),
  city: z
    .string({
      message: "Please select a state first then city",
    })
    .min(1, "Please select a city"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
