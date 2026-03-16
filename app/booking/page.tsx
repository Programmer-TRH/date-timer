import BookingForm from "@/components/forms/booking-form";
import React, { Suspense } from "react";

export default function BookingPage() {
  return (
    <section>
      <div className="wrapper section-spacing">
        <h1 className="text-3xl text-center font-bold mb-8">
          Chose Your Country with details
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </section>
  );
}
