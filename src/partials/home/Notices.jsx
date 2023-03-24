function Notices() {
  return (
    <div className="container mx-auto mb-20 px-4 text-onBackground">
      <h2 className="mb-12 text-center text-3xl font-semibold">
        Important Notices
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="group flex items-center gap-2 bg-surface p-6 shadow-sm hover:cursor-pointer hover:shadow-md animate-fadeInLeft animate-delay-300">
          <span
            className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-onPrimary"
            href="#"
          >
            <span className="-mb-1 text-2xl font-semibold uppercase">Mar</span>
            <span className="-mt-1 text-3xl font-extrabold">27</span>
          </span>
          <div className="flex-grow">
            <h5 className="font-semibold">
              <a href="http://demo.cccul.com/notices/corona-virus/">COVID-19</a>
            </h5>
            <p className="">
              Coronavirus disease (COVID-19) is an infectious disease caused…
              <a
                href="http://demo.cccul.com/notices/corona-virus/"
                className="group-hover:underline"
              >
                View Details
              </a>
            </p>
          </div>
        </div>
        <div className="group flex items-center gap-2 bg-surface p-6 shadow-sm hover:cursor-pointer hover:shadow-md animate-fadeInUp animate-delay-300">
          <span
            className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-onPrimary"
            href="#"
          >
            <span className="-mb-1 text-2xl font-semibold uppercase">Mar</span>
            <span className="-mt-1 text-3xl font-extrabold">27</span>
          </span>
          <div className="flex-grow">
            <h5 className="font-semibold">
              <a href="http://demo.cccul.com/notices/corona-virus/">COVID-19</a>
            </h5>
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused…
              <a
                href="http://demo.cccul.com/notices/corona-virus/"
                className="group-hover:underline"
              >
                View Details
              </a>
            </p>
          </div>
        </div>

        <div className="group flex items-center gap-2 bg-surface p-6 shadow-sm hover:cursor-pointer hover:shadow-md  animate-fadeInRight animate-delay-300">
          <span
            className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-onPrimary"
            href="#"
          >
            <span className="-mb-1 text-2xl font-semibold uppercase">Mar</span>
            <span className="-mt-1 text-3xl font-extrabold">27</span>
          </span>
          <div className="flex-grow">
            <h5 className="font-semibold">
              <a href="http://demo.cccul.com/notices/corona-virus/">COVID-19</a>
            </h5>
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused…
              <a
                href="http://demo.cccul.com/notices/corona-virus/"
                className="group-hover:underline"
              >
                View Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notices;
