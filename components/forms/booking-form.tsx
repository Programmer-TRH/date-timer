"use client";

import { useEffect } from "react";
import { useForm, useWatch, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Globe, Building2, MapPin, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Field, FieldError, FieldLabel } from "../ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import useLocationData from "@/hook/useLocation";
import { bookingSchema, BookingFormData } from "@/schemas/booking-schema";

export default function BookingForm() {
  const { control, handleSubmit, setValue } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      country: "",
      state: "",
      city: "",
    },
  });

  const country = useWatch({ control, name: "country" });
  const state = useWatch({ control, name: "state" });

  const {
    countries,
    states,
    cities,
    loading,
    fetchCountries,
    fetchStates,
    fetchCities,
    setCities,
  } = useLocationData();

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!country) return;

    fetchStates(country);
    setValue("state", "");
    setValue("city", "");
    setCities([]);
  }, [country]);

  useEffect(() => {
    if (!state) return;

    fetchCities(state);
    setValue("city", "");
  }, [state]);

  function onSubmit(data: BookingFormData) {
    toast.success("Selection Complete!", {
      description: `${data.country} → ${data.state} → ${data.city}`,
    });
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Location Selection</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Country */}
          <Controller
            name="country"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Country
                  {loading.countries && (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  )}
                </FieldLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={loading.countries}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>

                  <SelectContent>
                    {countries.map((item) => (
                      <SelectItem key={item.uuid} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* State */}
          <Controller
            name="state"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  State
                  {loading.states && (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  )}
                </FieldLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={!country || loading.states}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>

                  <SelectContent>
                    {states.map((item) => (
                      <SelectItem key={item.uuid} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* City */}
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  City
                  {loading.cities && (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  )}
                </FieldLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={!state || loading.cities}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>

                  <SelectContent>
                    {cities.map((item) => (
                      <SelectItem key={item.uuid} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Button type="submit" className="w-full">
            Confirm Selection
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
