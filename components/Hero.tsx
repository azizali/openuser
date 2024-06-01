import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto bg-base-100 flex flex-col justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-3 md:gap-5 lg:gap-7  items-center">
        <div className="flex flex-col gap-3">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight text-center">
            Express yourself fully!
          </h1>
          <p className="lg:text-2xl text-lg opacity-80 leading-relaxed text-center">
            Tell the world what you read, write, use, and do.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <button className="btn btn-primary btn-lg w-fit">
            Become an {config.appName}
          </button>
          <div className="text-sm text-base-content/80">
            12,578 people became OpenUser yesterday
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
