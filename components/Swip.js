import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from '../styles/Home.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swip.module.css'

// import "./Swip.css";

// import required modules
import { EffectCoverflow, Keyboard, Autoplay, Pagination, Navigation } from "swiper";

const Swip = () => {

  return (
    <Swiper
    // effect={"coverflow"}
    // grabCursor={true}
    // centeredSlides={true}
    // slidesPerView={"auto"}
    // coverflowEffect={{
    //   rotate: 50,
    //   stretch: 500,
    //   depth: 100,
    //   modifier: .5,
    //   slideShadows: true,
    // }}

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
              src="/stackos.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
              className={styles.cardImage}
            />
          </figure>
          <div className="card-body text-center my-4">
            <h2 className="card-title text-center my-4">Stack OS</h2>
            <p className="text-center my-4">StackOS is a multi-chain decentralized cloud where high-traffic applications can run.</p>
          </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/nordFinance.jpg"
              alt="Picture of the author"
              height={300}
              width={400}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Nord Finance</h2>
            <p>NordLoan provides functionality to borrow the Loan on NFT as collateral.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/dfyn.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DFYN</h2>
            <p>Dfyn is a true multi-chain AMM optimized for the cross-chain universe.</p>
            
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-700 shadow-2xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/defi-magic.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Defi Magic</h2>
            <p>DeFi Magic is a unique cross-chain DeFi utility ecosystem project.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/totemfi.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Totem FI</h2>
            <p>Staking-based prediction markets for the crypto community</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/opendefi.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Open Defi</h2>
            <p>openDefi is Bridging the gap between physical assets and Defi.</p>
            
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/checkdot.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CheckDot</h2>
            <p>The Ultimate tool that combines DeFi Solutions and Utility.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/trustpad.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">TrustPad</h2>
            <p>TrustPad - The Safest Multi-Chain IDO Launchpad.</p>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className={styles.card}>
          <figure>
            <Image
              src="/drife.jpg"
              alt="Picture of the author"
              height={300}
              width={300}
              layout="intrinsic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Drife</h2>
            <p>Drife.io - Decentralized Ride-hailing Experience</p>
            
          </div>
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swip;