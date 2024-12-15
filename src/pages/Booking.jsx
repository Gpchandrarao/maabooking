import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import HotelList from "../components/HotelList";
import BookingForm from "../components/BookingForm";
const queryClient = new QueryClient();

const Booking = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gradient-to-r from-[#d3cce3] to-[#e9e4f0] pb-10 h-full">
        <HotelList />
        <BookingForm />
      </div>
    </QueryClientProvider>
  );
};

export default Booking;
