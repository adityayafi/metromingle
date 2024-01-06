import Image from "next/image";

const About = () => {
  return (
    <section id="About Us" className="bg-white py-16 px-16">
        <div className="pb-10 justify-center flex">
          <div className="flex justify-between items-center">
            <Image src="/Line 3.svg" height={19} width={166} alt="" className="p-2"/>
            <Image src="/ion_cut-outline.svg" height={32} width={32} alt="" />
            <p className="text-4xl font-semibold px-4">About Us</p>
            <Image src="/ion_cut-outline.svg" height={32} width={32} alt="" className="rotate-180"/>
            <Image src="/Line 3.svg" height={19} width={166} alt="" className="p-2"/>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Image src="/about content.png" width={540} height={381} alt="" />
          </div>
          <div className="w-[792px]">
            <p className="text-[32px]">MetroMingle Barbers: Crafting Community, Celebrating Style Since 2018.</p>
            <div className="text-justify">
              <p className="pb-4">
              {`Welcome to MetroMingle Barbers, where grooming meets community in the heart of urban style. 
              At MetroMingle, we believe that a haircut is more than just a service—it's an experience that brings people together. 
              Our barbers are not just skilled professionals; they are passionate individuals dedicated to creating an atmosphere where style and sociability converge.`}
              </p>
              <p className="pb-4">
              {`Step into our vibrant space, where the hum of clippers harmonizes with the laughter of friends and the buzz of urban energy. 
              MetroMingle is not just a barbershop; it's a destination where clients become part of a community that appreciates the art of grooming. 
              Our barbers are not only masters of their craft but also adept storytellers, creating an environment where every visit is a chance to mingle, share stories, and connect.`}
              </p>
              <p className="pb-4">
              {`We take pride in our commitment to precision and style, staying on top of the latest trends and techniques to ensure that our clients leave looking and feeling their best. 
              MetroMingle Barbers is more than a grooming destination; it's a haven for self-expression, individuality, and camaraderie.`}        
              </p>
              <p>Join us at MetroMingle, where every haircut is an opportunity to mingle with style, and every visit is a celebration of community.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About;