import React from 'react';

const Header = () => {
  return (
    <div className="z-[9999] w-full fixed top-0 p-4 flex justify-between items-center bg-[#162038] h-[12vh] lg:h-[14vh]
                    bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg border-b border-[rgba(255,255,255,0.2)] 
                    shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
      <div className="min-w-[20vw]">
        <span className="text-[#B9DD6B] text-3xl block font-semibold">T-rex</span>
        <span className="text-gray-300 text-md -mt-4 ml-1">Infotech</span>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" fill="#B9DD6B" width={25} viewBox="0 0 448 512">
        <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
      </svg>
    </div>
  );
};

export default Header;

// #162038