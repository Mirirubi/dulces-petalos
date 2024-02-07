"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="w-full h-20 bg-blueStone sticky top-0">
        {/* <div className="w-full h-20 bg-manz sticky top-0"> */}
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-blueStone font-['Snell_Roundhand']">
            <Image src="/logo.svg" alt="MR" width={64} height={64} />
            <p className="text-2xl"> Floristería Dulces Pétalos </p>
            {/* <p className="text-2xl"> Floristería Dulces Pétalos 💐</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
