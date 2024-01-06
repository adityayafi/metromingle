import Image from "next/image";

const Service = () => {

  const services = [
    {
      name: 'Regular Cut',
      price: '60k',
      desc: 'Our service dedicated to delivering impeccable fresh haircuts tailored to your unique style preferences. With a team of skilled stylists trained in precision cutting techniques, StyleSculpt offers you unlimited choices, allowing you to embrace any hairstyle you desire, from classic to contemporary.',
    },
    {
      name: 'Premium Cut',
      price: '100k',
      desc: "Our skilled stylists craft the perfect cut tailored to your style, be it classic or trendy. What make it  special? We've added a pampering hair spa treatment to enhance both the look and health of your hair. With a relaxed atmosphere and efficient services, we ensure you leave not just with a great haircut but a revitalized feeling.",
    },
    {
      name: 'Coloring Hair',
      price: '130k - 900k*',
      desc: 'Our expert colorists specialize in creating personalized looks to match your style. From classic highlights to bold fashion colors, we offer a range of techniques using high-quality products for vibrant, long-lasting results.',
    },
    {
      name: 'Perm & Smoothing Treatment',
      price: '300k - 800k*',
      desc: 'Looking for those perfect, effortless waves? Choose our perm treatment for a gorgeous perm that adds volume and texture to your hair. Prefer silky, straight strands? our smoothing treatment that tames frizz and leaves your hair luxuriously smooth. Our skilled stylists ensure a personalized experience, using top-notch products for stunning, long-lasting results.'
    }
  ]
  return (
    <section id="Services" className="pb-16">
      <div className="h-[650px] bg-white">
        <div className="flex justify-center">
          <div className="w-[702px] h-[117px] bg-white rounded shadow-lg mt-[-58px] z-10 relative flex justify-between items-center">
            <div className="w-auto h-auto justify-center items-center flex flex-col px-12">
              <p className="text-secondary text-[36px]">20</p>
              <p className="text-tertiary text-[16px]">Profesional Hair Artist</p>
            </div>
            <div className="h-[69px] left-[263px] w-0.5 bg-tertiary absolute"></div>            
            <div className="w-auto h-auto justify-center items-center flex flex-col px-12">
              <p className="text-secondary text-[36px]">4000</p>
              <p className="text-tertiary text-[16px]">Order</p>
            </div>
            <div className="h-[69px] right-[244px] w-0.5 bg-tertiary absolute"></div>
            <div className="w-auto h-auto justify-center items-center flex flex-col px-12">
              <p className="text-secondary text-[36px]">1500</p>
              <p className="text-tertiary text-[16px]">Membership Active</p>
            </div>
          </div>
        </div>
        <div className="mx-[60px] flex flex-col justify-center">
          <div className="pt-16 pb-10 justify-center flex">
            <div className="flex justify-between items-center">
              <Image src="/Line 3.svg" height={19} width={166} alt="" className="p-2"/>
              <Image src="/ion_cut-outline.svg" height={32} width={32} alt="" />
              <p className="text-4xl font-semibold px-4">Our Services</p>
              <Image src="/ion_cut-outline.svg" height={32} width={32} alt="" className="rotate-180"/>
              <Image src="/Line 3.svg" height={19} width={166} alt="" className="p-2"/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[92px] gap-y-[39px]">
            {services.map((data,i) => (
              <div className="w-[650px] h-auto" key={i}>
                <div className="flex justify-between border-b-2 border-secondary border-spacing-1">
                  <p className="text-black font-semibold text-[20px] pb-2">{data.name}</p>
                  <p className="text-secondary font-semibold text-[20px] pb-2">{data.price}</p>
                </div>
                <p className="font-semibold ">{data.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-10">
            <p className="text-secondary text-sm">*Term & Condition Apply</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service;