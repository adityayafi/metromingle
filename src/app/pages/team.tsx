const Team = () => {

  const team = [
    {
      name: 'Usagi',
      age: 'Tsukiko, 24',
      img: "bg-[url('/usagi.png')]",
      rating: '5.0',
    },
    {
      name: 'Edward',
      age: 'Newgate, 25',
      img: "bg-[url('/edward.png')]",
      rating: '4.9',
    },
    {
      name: 'Taylor',
      age: 'Maverick, 23',
      img: "bg-[url('/taylor.png')]",
      rating: '4.9',
    },
    {
      name: 'Adam',
      age: 'Jhonson, 26',
      img: "bg-[url('/adam.png')]",
      rating: '4.7',
    }
  ]

  return (
    <section id='Our Team' className="bg-secondary py-[60px]">
      <div className="bg-team-image bg-cover">
        <div className="pb-10 justify-center flex">
          <div className="flex justify-between items-center">
            <img src="/Line white.svg" alt="" className="p-2"/>
            <img src="/ion_cut-outline-white.svg" alt="" />
            <p className="text-4xl font-semibold px-4">Meet Our Team</p>
            <img src="/ion_cut-outline-white.svg" alt="" className="rotate-180"/>
            <img src="/Line white.svg" alt="" className="p-2"/>
          </div>
        </div>
        <div className="flex justify-center pb-[36px]">
          <p className="font-semibold text-[16px] text-white w-[630px] h-[60px] text-center">
            “ Step into the world of precision and style with our professional barber team. 
            Our skilled and experienced barbers are not just experts in their craft, they are 
            artists dedicated to the art of grooming and transforming hair into a masterpiece “
          </p>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex justify-center">
            {
              team.map((data,i) => (
                <div className="w-[200px] h-[270px] bg-white flex flex-col justify-center items-center rounded-2xl mx-6" key={i}>
                  <div className={`${data.img} ` + `bg-cover w-[180px] h-[250px] rounded-xl`}>
                    <div className="bg-gradient-to-t bg-cover from-secondary to-transparent w-[180px] h-[120px] mt-[130px] rounded-xl">
                      <div className="flex justify-between items-end text-white bottom-1 px-2 pt-[72px]">
                        <div>
                          <p>{data.name}</p>
                          <p>{data.age}</p>
                        </div>
                        <div className="flex items-center h-6">
                          <img src="/solar_star-bold.svg" alt="" className="pr-0.5"/>
                          <p>{data.rating}</p>                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-white text-secondary w-[151px] h-[52px] rounded-full mt-[36px] mb-4 hover:bg-black hover:text-white hover:transition hover:ease-in-out hover:duration-700">Booking Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;