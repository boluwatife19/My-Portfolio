import { Swiper } from 'swiper/react';

// import required modules
import { Autoplay} from 'swiper/modules';

export default function Swipperc({children}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-full flex flex-row"
      >
        {children}
      </Swiper>
    </>
  );
}
