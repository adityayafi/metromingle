const Hero = () => {
  return (
    <section id="Home">
      <div className="w-screen bg-hero-image bg-cover h-[450px]">
        <div className="bg-black/60 absolute bg-fixed mt-20 h-[370px] w-full">
          <div className="flex flex-col justify-center items-center px-4 pt-8">
            <p className="text-secondary font-semibold text-[32px]">" Refine Your Style, Refresh Your Look "</p>
            <div className="text-white text-xl justify-center items-center flex flex-col pt-6">
              <p>Reserve Your Spot for the Perfect Cut:</p>
              <p>Book Now and Experience Barbering Excellece!</p>
            </div>
            <button className="bg-secondary text-white w-[151px] h-[52px] rounded-full mt-8 hover:bg-white hover:text-secondary hover:transition hover:ease-in-out hover:duration-700">Booking Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;