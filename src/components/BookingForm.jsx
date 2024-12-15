import { useMutation } from "react-query";
import axiosInstance from "../api/axiosInstance";
import useBookingStore from "../store/bookingStore";

const submitBooking = async (booking) => {
  const response = await axiosInstance.post("/bookings", booking);
  return response.data;
};

const BookingForm = () => {
  const selectedHotel = useBookingStore((state) => state.selectedHotel);
  const { mutate, isLoading, isError, isSuccess } = useMutation(submitBooking);

  const handleBooking = (e) => {
    e.preventDefault();
    const guestName = e.target.guestName.value;
    if (!guestName || !selectedHotel) return;

    const booking = {
      hotelId: selectedHotel.id,
      hotelName: selectedHotel.name,
      guestName,
    };
    mutate(booking);
  };

  if (!selectedHotel)
    return (
      <p className="text-center text-2xl font-semibold">
        Please select a hotel to book.
      </p>
    );

  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-2xl flex gap-2">
        Book:{" "}
        <p className="text-blue-700 font-semibold">{selectedHotel.name}</p>
      </h2>
      <form onSubmit={handleBooking} className="flex gap-2 items-center">
        <label className="flex gap-2">
          <p>Guest Name:</p>
          <input
            type="text"
            name="guestName"
            required
            className="p-2 rounded-sm"
          />
        </label>
        <button
          type="submit"
          className="cursor-pointer bg-blue-700 w-1/4 h-10 rounded-lg text-white hover:scale-105 transition-all duration-500 ease-in-out"
          disabled={isLoading}
        >
          Book Now
        </button>
      </form>
      {isSuccess && <p className="text-green-700">Booking successful!</p>}
      {isError && <p>Error booking the hotel. Please try again.</p>}
    </div>
  );
};

export default BookingForm;
