import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function SwiperComp() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img
                src="https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg"
                alt=""
                width={"50px"}
              />
            </div>
            <div>
              <h6>دوري أبطال إفريقيا</h6>
              <div className="d-flex justify-content-around align-items-center">
                <span>0</span>
                <span>1</span>
              </div>
              <div>
                <p>انتهت</p>
              </div>
              <div>18:00</div>
            </div>
            <div>
              <img
                src="https://media.gemini.media/img/yallakora/IOSTeams//120//2018/8/18/Mamelodi2018_8_18_23_12.jpg"
                alt=""
                width={"50px"}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default SwiperComp;
