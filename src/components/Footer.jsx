import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-white p-4 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="footer-content flex flex-col items-center justify-center">
          <img src="images/main-logo.png" className="mb-2" alt="logo" />
          <p className="mb-3">Bid. Win. Own.</p>
          <div className="mb-3 flex gap-3 items-center">
            <a>Home</a>
            <a>Auctions</a>
            <a>Categories</a>
            <a>How to works</a>
          </div>
          <p className="mb-3">©{year} AuctionHub. All rights reserved.</p>
          <p>
            Design and Developed by{" "}
            <a
              className="text-blue-800 font-medium hover:underline"
              href="https://faisalafrid.vercel.app"
              target="_blank"
            >
              Afrid
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
