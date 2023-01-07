import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from '../../styles/Home.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../swip.module.css'

// import "./Swip.css";

// import required modules
import { EffectCoverflow, Keyboard, Autoplay, Pagination, Navigation } from "swiper";
const EcoSwip = () => {
    return (
        <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[ EffectCoverflow, Keyboard, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
          <div className={styles.card}>
          <figure className={styles.ImageFig}>
            <Image
              src="/unicrypt.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
              className={styles.cardImage}
            />
          </figure>
          <div className="card-body text-center my-4">
            <h2 className="card-title text-center my-4">Unicrypt</h2>
            <p className="text-center my-4">Unicrypt provides an ever-growing suite of decentralized services to bring value to the DeFi space as a whole by delivering disruptive, flexible and audited technology.</p>
          </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/hotbit.jpg"
              alt="Picture of the author"
              height={300}
              width={400}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hotbit</h2>
            <p>Hotbit provides various types of cryptocurrency investment service, supports the trading of more than 400 cryptocurrency projects.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/foundership.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Foundership</h2>
            <p>Where Successful Founders, Leaders & Builders enable new Web3 Projects with the Coaching, Capital and Community, they need to succeed.</p>
            
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-700 shadow-2xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/polygon.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Polygon DAO</h2>
            <p>PolygonDAO aims to turn the control back the community, evangelize developers, and Support DAO open-source initiatives.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/tdefi.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">TDeFi</h2>
            <p>TDeFi accelerator provides access to World-Class Mentors, Industry Connections, Technology,Exchanges, liquidity, and growth hacking partnerships.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/pathfund.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pathfund</h2>
            <p>PathFund is a project that delivers crypto-based solutions in the decentralized blockchain world by building a secure and friendly ecosystem with an intuitive interface for investors.</p>
            
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/woodstock.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Woodstock</h2>
            <p>Woodstock is a Thesis and Research based web3 focused Investment Firm investing in early and growth stage Web 3.0 startups.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/unicrypt.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Unicrypt</h2>
            <p>Unicrypt provides an ever-growing suite of decentralized services to bring value to the DeFi space as a whole by delivering disruptive, flexible and audited technology.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/hotbit.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hotbit</h2>
            <p>Hotbit provides various types of cryptocurrency investment service, supports the trading of more than 400 cryptocurrency projects.</p>
            
          </div>
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
    );
};

export default EcoSwip;