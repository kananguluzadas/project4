import React, { useContext } from "react";
import ForYouCards from "../components/ForYouCards";
import SectionName from "../components/SectionName";
import Collections from "../components/Collections";
// import Tabs from '../components/TabComponent/Tabs'
import TabElements from "../components/TabElements";
import Slider from "../components/Slider";
import sizin1 from "../assets/images/sizin1.png";
import sizin2 from "../assets/images/sizin2.png";
import sizin3 from "../assets/images/sizin3.png";

import converse from "../assets/images/CR-MIDDLE-LONG-BNNR.png";

import collect1 from "../assets/images/collect1.png";
import collect2 from "../assets/images/collect2.png";
import collect3 from "../assets/images/collect3.png";
import collect4 from "../assets/images/collect4.png";

import {logos, firstSwiper } from "../components/MyLinks";


const Home = () => {
  const slidesPerView = 4;

  return (
    <div>

      <Slider children={firstSwiper} />
      <div className="flex flex-col gap-100 pt-80px px-20px">
        <div className="relative">
          <SectionName className="text-4xl font-bold after:content-[''] after:w-50 after:h-5 after:bg-orange after:block after:absolute phone:after:right-[20%]  sm:after:right-[8%] sm:px-16 sm:-ml-16 md:after:right-[18%] md:-ml-20 after:bottom-[0px] lg:-ml-12 xl:after:right-[27%] xl:-ml-4 uppercase leading-9 " children="SİZİN ÜÇÜN SEÇDİKLƏRİMİZ" />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-90">
          <ForYouCards src={sizin1} gender="KİŞİLƏR" />
          <ForYouCards src={sizin2} gender="QADINLAR" />
          <ForYouCards src={sizin3} gender="UŞAQLAR" />
        </div>
      </div>

      <div className="pt-70px">
        <img src={converse} alt="img" />
      </div>

      <div className="pt-80px">
        <div className="relative">
          <SectionName className="text-4xl font-bold after:content-[''] after:w-50 after:h-5 after:bg-orange after:block after:absolute phone:after:right-[15%] phone:-ml-12  sm:after:right-[18%] sm:px-16 md:after:right-[28%] md:ml-0 after:bottom-[0px] lg:after:right-[35%]  xl:after:right-[36%] uppercase " children="KOLLEKSİYALAR" />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-y-10 gap-5 mb-140px px-35px pt-70px">
          <Collections src={collect1} brands="New Balance" />
          <Collections src={collect2} brands="Adidas" />
          <Collections src={collect3} brands="Puma" />
          <Collections src={collect4} brands="Nike" />
        </div>
      </div>

      <TabElements />
      <div className="relative pt-12">
        <SectionName className=" text-4xl font-bold after:content-[''] after:w-50 after:h-5 after:bg-orange after:block after:absolute phone:after:right-[20%]  sm:after:right-[25%] md:after:right-[34%] after:bottom-[0px] xl:after:right-[38%] uppercase leading-9 " children="BRENDLƏR" />
      </div>
      <div className="pt-10">
        <Slider className="" children={logos} slidesPerView={slidesPerView} />
      </div>
    </div>
  );
};

export default Home;
