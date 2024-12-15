import { create } from "zustand";

const useBookingStore = create((set) => ({
  selectedHotel: null,
  setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),
  bookingDetails: null,
  setBookingDetails: (details) => set({ bookingDetails: details }),
}));

export default useBookingStore;
