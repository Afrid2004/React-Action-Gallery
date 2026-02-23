import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[730px] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/banner-car.avif')] bg-no-repeat bg-center bg-cover snap-y ">
      <div className="max-w-[1200px] h-full mx-auto flex items-center ">
        <div className="banner-content-container px-3">
          <h2 className=" text-6xl text-white font-semibold mb-3 ">
            Bid on Unique Items from <br /> Around the World
          </h2>
          <p className="mb-5 text-white opacity-80">
            Discover rare collectibles, luxury goods, and vintage <br />{" "}
            treasures in our curated auctions
          </p>
          <a
            href="#"
            className=" bg-white px-4 py-2 text-black rounded-[999px] "
          >
            Explore Auctions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
