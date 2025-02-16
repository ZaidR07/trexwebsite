import Header from "./components/Header";
import { Meteors } from "@/components/ui/meteors";
import { FloatingDockDemo } from "./components/Floatingnav";

export default function Home() {
  return (
    <>
      <Header />

      <div className="">
        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full transform scale-[0.80] blur-3xl" />

          {/* Green Spotlight Behind Tagline */}
          <div className="z-[99999] absolute top-[30vh] left-[8vw] w-[300px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(192,217,137,0.6)_0%,transparent_70%)] blur-3xl opacity-90"></div>

          <div className="min-h-[90vh] relative w-[100vw] bg-black h-full overflow-hidden flex flex-col items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h1 className="font-bold text-3xl text-white mt-[18vh] mb-8 relative z-50">
                Transforming your vision <br />
                into Digital Evolution
              </h1>

              <button className="bg-[#c0d989] text-sm p-[2vw_4vw] rounded-lg">
                Connect Now
              </button>

              <div className="max-w-[78vw] mt-[5vh] break-words whitespace-normal ">
                <span className="text-[#B9DD6B] text-md">
                  "Trex"&nbsp;
                  <span className="text-white text-sm">
                    provides StartUps, MSME's, and Large Enterprises with
                    software solutions like ERP, CRM, Website, Mobile
                    Application, and many more...
                  </span>
                </span>
              </div>
            </div>

            {/* Meteor effect */}
            <Meteors number={80} />
          </div>
        </div>
      </div>

      <FloatingDockDemo />
    </>
  );
}
