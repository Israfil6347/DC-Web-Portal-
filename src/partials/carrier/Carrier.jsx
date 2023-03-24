import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

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

function Carrier() {
  // const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // useEffect(() => {
  //   const transformTasks = (tasksObj) => {
  //     const loadedTasks = [];

  //     for (let i = 0; i < tasksObj.data.length; i++) {
  //       loadedTasks.push({
  //         menuId: tasksObj.data[i].menuId,
  //         menuTitle: tasksObj.data[i].menuTitle,
  //         url: tasksObj.data[i].url,
  //         icon: tasksObj.data[i].icon,
  //         submenus: tasksObj.data[i].submenus,
  //       });
  //     }
  //     setMenu(loadedTasks);
  //   };

  //   fetchTasks(
  //     {
  //       url: "http://172.16.200.14:8080/api/root/public-menus",
  //     },
  //     transformTasks
  //   );
  // }, [fetchTasks]);
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      exit={{
        opacity: 0,
        x: -window.innerWidth,
        transition: { duration: 0.3 },
      }}
      initial={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0.3 },
      }}
      animate={{ x: 0, opacity: 1 }}
    >
      {jobPost.length === 0 ? (
        <section className="text-onSurface">
          <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify animate-fadeInRight">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <div className="animate-backInRight text-center">
                <h1 className="animate-twSpin text-5xl font-extrabold">
                  No job circular at this moment
                </h1>
                <p>Keep connected for future job circular.</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobPost.map((post) => (
                <div className=" text-onSurface">
                  <div className="">
                    <div className="group flex flex-col rounded-sm bg-surface p-4 shadow-sm hover:shadow-md group-hover:cursor-pointer">
                      <NavLink
                        state={post.id}
                        to="/career/singlePage/"
                        className="group-hover:cursor-pointer"
                      >
                        <h4 className="text-xl">{post.position}</h4>

                        <p className="text-xs">{post.education}</p>
                        <div className="text-xs">
                          <span className="">Deadline: </span>
                          {post.deadline}
                        </div>
                        <div className="text-xs">
                          <NavLink
                            state={post.id}
                            className="text-onSurface group-hover:border-b group-hover:border-primary group-hover:text-primary"
                            to="/career/singlePage/"
                          >
                            View details
                          </NavLink>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Carrier;
