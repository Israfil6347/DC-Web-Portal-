import image from "../../assets/images/logo/logocccul.png";

function UpComingDialogue({ popUpHandler, isOpen }) {
  const displayModalHandler = () => {
    popUpHandler(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex transform items-center justify-center overflow-hidden bg-gray-900 bg-opacity-95 p-4 text-onSurface  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 `}
      >
        <div className="m-auto w-full overflow-hidden rounded-sm bg-surface shadow-sm md:w-96">
          <div className="header flex items-center justify-center border-b p-4 text-2xl font-bold text-onSurface">
            <img src={image} alt="" width="40" height="40" />
            <p className="ml-2 text-primary antialiased">
              Dhaka Credit Web Portal
            </p>
          </div>
          <div className="content p-4">
            <p className="text-center font-semibold">Upcoming Feature...</p>
          </div>
          <div className="flex items-center justify-center gap-4 p-4">
            <button
              className="w-24 rounded-sm border py-1 font-semibold uppercase shadow-sm hover:bg-primary hover:text-onPrimary"
              onClick={displayModalHandler}
            >
              OK
            </button>
            <button
              className="w-24 rounded-sm border py-1 font-semibold uppercase shadow-sm hover:bg-primary hover:text-onPrimary"
              onClick={displayModalHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpComingDialogue;
