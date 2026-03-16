import BookingForm from "@/components/forms/booking-form";
import React, { Suspense } from "react";

export default function BookingPage() {
  return (
    <section>
      <div className="wrapper">
        <h1>Chose Your Country with details</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </section>
  );
}
