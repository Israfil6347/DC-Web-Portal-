import { NavLink } from "react-router-dom";

const jobPost = [
  {
    id: 1,
    position: "Database Administrator",
    education: "BSC in CSE",
    deadline: "30 December,2022",
    vaccancie: 3,
  },
  {
    id: 2,
    position: "Database Administrator",
    education: "BSC in CSE",
    deadline: "30 December,2022",
    vaccancie: 3,
  },
  {
    id: 3,
    position: "Database Administrator",
    education: "BSC in CSE",
    deadline: "30 December,2022",
    vaccancie: 3,
  },
];

function FloatingCarrier() {
  // const updatedPost = jobPost.PublishOn.filter(dateFilter);

  return (
    <>
      <div className="absolute z-50 flex h-screen flex-col justify-center">
        <div className="min-h-96 group fixed flex w-80 -translate-x-[280px] transform flex-row items-center duration-300 hover:translate-x-0">
          <div className="h-full flex w-full flex-col items-center justify-around rounded-r-md bg-surface p-4 text-onSurface shadow-md">
            <div className="text-left">
              <h2 className="text-2xl font-semibold uppercase antialiased">
                Job Portal
              </h2>
              <p className="text-xs">
                Dhaka Credit is the first & largest Credit Union of its kind
                currently in Bangladesh. Join with us.
              </p>
            </div>
            {jobPost.length == 0 ? (
              <p className="my-10 w-full text-left font-semibold">
                No job circular at this moment
              </p>
            ) : (
              <p className="my-10 w-full text-left">
                <ul class="flex w-full flex-col divide-y ">
                  {jobPost.map((data) => (
                    <li class="overflow-hidden rounded-sm hover:bg-backgroundVariant hover:shadow-sm">
                      <NavLink state={data.id} to="/career/singlePage/">
                        <p class="antialiased">{data.position}</p>
                        <p class="text-xs">{data.Eduction}</p>
                        <p class="text-xs">PublishOn:{data.PublishOn}</p>
                        <div className="text-xs"></div>
                        <NavLink
                          state={data.id}
                          className="text-onSurface group-hover:border-b group-hover:border-primary group-hover:text-primary"
                          to="/career/singlePage/"
                        >
                          View details
                        </NavLink>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </p>
            )}
            <NavLink
              to="career"
              class="block text-center hover:font-semibold hover:text-primary float-right pt-6 "
            >
              View All
            </NavLink>
          </div>
          <p className="text-sideways rounded-r-md bg-primary px-2 py-6 text-center capitalize text-onPrimaryVariant shadow-md">
            Work With Us
          </p>
        </div>
      </div>
    </>
  );
}

export default FloatingCarrier;
