import { useQuery } from "react-query";
import axiosInstance from "../api/axiosInstance";
import useBookingStore from "../store/bookingStore";
import { MdOutlineBedroomParent } from "react-icons/md";

const fetchHotels = async () => {
  const response = await axiosInstance.get("/hotels");
  return response.data;
};

const HotelList = () => {
  const { data: hotels, isLoading, error } = useQuery("hotels", fetchHotels);
  const setSelectedHotel = useBookingStore((state) => state.setSelectedHotel);

  if (isLoading) return <p>Loading hotels...</p>;
  if (error) return <p>Error fetching hotels!</p>;

  return (
    <div className="flex flex-col p-5">
      <h2 className="text-center text-blue-500 text-4xl font-bold">
        Available Hotels
      </h2>
      <ul className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
        {hotels.map((hotel) => (
          <li key={hotel.id} className="flex flex-col gap-3">
            <div className="flex gap-5">
              <img
                src={hotel.imageUrl}
                alt=""
                className="w-2/3 h-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-semibold text-blue-700">
                  {hotel.name}({hotel.location})
                </p>
                <div className="flex items-center gap-1">
                  <MdOutlineBedroomParent className="text-4xl" />
                  <p className="text-xl font-semibold">
                    {hotel.availableRooms} {"  "}Available
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  price{"  "}
                  {hotel.pricePerNight} {"  "}RS
                </p>
                <p>
                  rating {"  "}
                  {hotel.rating}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedHotel(hotel)}
              className="cursor-pointer bg-blue-700 w-1/4 h-10 rounded-lg text-white hover:scale-105 transition-all duration-500 ease-in-out "
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
