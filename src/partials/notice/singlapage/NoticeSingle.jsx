import notice from "../../../assets/images/notice/Notice.jpg";

function NoticeSingle() {
  return (
    <>
      <section className="">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="clear-both"></div>
          <div className="content bg-surface px-4 py-10 shadow-sm md:mx-20 md:px-6 md:py-10 lg:mx-40 lg:px-20 lg:py-20">
            <h2 className="mb-2 p-1 text-3xl font-bold text-primary">
              Child Care
            </h2>
            <img src={notice} alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default NoticeSingle;
