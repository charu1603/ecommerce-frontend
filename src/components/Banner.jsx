import banner from "../assets/banner.jpeg";

const Banner = () => {
  return (
    <div className="relative h-80 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg overflow-hidden mb-8 mt-6">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex items-center justify-between h-full">
        <img
          src={banner}
          alt="Shopping Banner"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
