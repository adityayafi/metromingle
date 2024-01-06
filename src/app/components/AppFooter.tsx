import Image from "next/image";

const AppFooter = () => {
  return (
    <div className="bg-secondary py-[49px] ">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-between items-start w-[754px] pb-12 self-center">
            <div>
              <p className="font-semibold">Social Media</p>
              <div className="flex justify-between">
                <Image src="/skill-icons_instagram.svg" width={16} height={17} alt="" />
                <Image src="/logos_tiktok-icon.svg" width={15} height={17} alt="" />
                <Image src="/logos_youtube-icon.svg" width={23} height={17} alt="" />
              </div>
            </div>
            <div>
              <p className="font-semibold">Support</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
            <div>
              <p className="font-semibold">Have Question?</p>
              <div className="flex">
                <Image src="/mdi_location.svg" width={24} height={24} alt="" className="pr-2"/>
                <p>Jl. Prof Eyckman No. 19 - 21, Bandung, Jawa Barat</p>
              </div>
              <div className="flex">
                <Image src="/ic_baseline-email.svg" width={24} height={24} alt="" className="pr-2"/>
                <p>metro@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="h-0.5 left-[60.38px] w-[1391.25px] mb-12 bg-black"></div>
          <p className="text-black self-center">Copyright © 2023 All rights reserved | MetroMingle</p>
        </div>
      </div>
    </div>

  )
}

export default AppFooter;