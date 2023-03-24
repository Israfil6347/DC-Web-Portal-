import image from "../../assets/images/logo/logocccul.png";

function LoaderDialogue({ isLoading }) {
  return (
    <>
      {/* <section
        className={`fixed inset-0 z-[60] flex items-center justify-center overflow-hidden p-4 text-onSurface transition-all duration-300 ${
          isLoading ? "block" : "hidden"
        }`}
      >
        <div className="relative">
          <div className="absolute left-1/2 -mt-[100px] -ml-[100px] h-[200px] w-[200px] -rotate-[135deg] transform">
            <div className="">
              <div className="absolute top-[15px] left-[15px] h-[110px] w-[110px] animate-twSpin rounded-[50%] border-[5px] border-solid border-primary border-t-transparent animate-ease animate-infinite animate-delay-[0.6s]"></div>
              <div className="absolute left-[25px] top-[25px] h-[90px] w-[90px] animate-twSpin rounded-[50%] border-[5px] border-solid border-primary border-t-transparent animate-ease animate-infinite animate-delay-[0.4s]"></div>
              <div className="absolute left-[35px] top-[35px] h-[70px] w-[70px] animate-twSpin rounded-[50%] border-[5px] border-solid border-primary border-t-transparent animate-ease animate-infinite animate-delay-[0.2s]"></div>
              <div className="absolute left-[45px] top-[45px] h-[50px] w-[50px] animate-twSpin rounded-[50%] border-[5px] border-solid border-primary border-t-transparent animate-ease animate-infinite"></div>
              <img
                class="absolute left-[58px] top-[62px] w-[20px] rotate-[135deg]"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}
      <section
        className={`fixed inset-0 flex animate-spin flex-col items-center justify-center ${
          isLoading ? "hidden" : "block"
        } `}
      >
        <div className="absolute h-[110px] w-[110px] rotate-[225deg] animate-spin rounded-[50%] border-[5px] border-solid border-primary border-t-transparent delay-75"></div>
        <div className="absolute h-[90px] w-[90px] rotate-[270deg] animate-spin rounded-[50%] border-[5px] border-solid border-primary border-b-transparent delay-100"></div>
        <div className="absolute h-[70px] w-[70px] rotate-[90deg] animate-spin rounded-[50%] border-[5px] border-solid border-primary border-l-transparent delay-200"></div>
        <div className="absolute h-[50px] w-[50px] rotate-[180deg] animate-spin rounded-[50%] border-[5px] border-solid border-primary border-r-transparent delay-700"></div>
      </section>
    </>
  );
}

export default LoaderDialogue;
