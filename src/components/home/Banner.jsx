const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[550px]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/FRJHHN7G/photo-1501959181532-7d2a3c064642.avif)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
