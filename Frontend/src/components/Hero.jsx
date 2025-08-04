const Hero = () => (
  <div className="relative h-screen w-full">
    <img
      src="img1.jpg"
      alt="Basti Ki Pathshala"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-white text-5xl font-bold mb-4">
        Basti Ki Pathshala
      </h1>
      <p className="text-white text-lg max-w-3xl">
        Breaking the barriers of education for the underprivileged. Join us in building a better future through education and empowerment.
      </p>
      <a href="/register" className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-lg">
        Become a Volunteer
      </a>
    </div>
  </div>
);

export default Hero;
