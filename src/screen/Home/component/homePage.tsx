// src/components/Home.tsx
import React, { useEffect, useRef, useState } from "react";
import '../home.css';
import Card from "./card";
import ImageSlider from "./imageSlider";
import cardImage1 from "../../../images/card-img1.jpg";
import cardImage2 from "../../../images/card-img2.jpg";
import cardImage3 from "../../../images/card-img3.jpg";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import ProductList from "../../Product/component/productList";
import PromoBanner from "./promoBanner";
import InfoBanner from "./Banner/info/component/infoBanner";
import SaleBanner from "./Banner/sale/component/saleBanner";
import SecondaryFooter from "../../Footer/component/secondaryFooter";
import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SpeedDialTooltipOpen from "../../Common/component/floatingActionButton";
import Gallery  from "./aliceCarouselBanner";
import VideoBanner from "./Banner/video/component/videoBanner";
import MultiFeatureBanner from "./Banner/multiFeature/component/multiFeatureBanner";
import ScrollProductBanner from "./Banner/scrollProduct/component/scrollProductBanner";
import MobileBanner from "./Banner/mobile/component/mobileBanner";

const cardData = [
  {
    image: cardImage1,
    title: "20% Off On Tank Tops",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    buttonText: "SHOP NOW",
  },
  {
    image: cardImage2,
    title: "Latest Eyewear For You",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    buttonText: "SHOP NOW",
  },
  {
    image: cardImage3,
    title: "Let's Lorem Suit Up!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    buttonText: "CHECK OUT",
  },
];

const Home = () => {
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimeout = useRef<NodeJS.Timeout | null>(null);
  const [scrollCount, setScrollCount] = useState(0);
  const maxScrollCount = 5; // Maximum number of scrolls

  useEffect(() => {
    const duration = 100; // Duration for the smooth scroll animation (0.1 second)
    const scrollDistance = 5; // Scroll 5 pixels

    const smoothScroll = () => {
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1); // Calculate the progress, capped at 1
        window.scrollBy(0, progress * scrollDistance); // Scroll smoothly
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const initiateScroll = () => {
      if (scrollCount < maxScrollCount) {
        smoothScroll();
        setScrollCount((prevCount) => prevCount + 1);
        scrollTimeout.current = setTimeout(initiateScroll, 5000); // Scroll every 5000 milliseconds
      }
    };

    const checkForInactivity = () => {
      const currentTime = Date.now();
      if (currentTime - lastInteractionTime >= 150000) { // 30 seconds of inactivity
        initiateScroll();
      }
      inactivityTimeout.current = setTimeout(checkForInactivity, 5000); // Check every 5000 milliseconds
    };

    inactivityTimeout.current = setTimeout(checkForInactivity, 5000);

    const resetInteractionTime = () => {
      setLastInteractionTime(Date.now());
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      setScrollCount(0); // Reset scroll count on user interaction
    };

    window.addEventListener('click', resetInteractionTime);

    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
      window.removeEventListener('click', resetInteractionTime);
    };
  }, [lastInteractionTime, scrollCount]);

  return (
    <main style={{ flex: 1 }}>
      <>
        <PromoBanner
          backgroundImage={banner1}
          heading="Running Offers For"
          subheading="Hot Summer"
          description="25% Off On All Products"
          promoText=""
          buttonText="Shop Now"
          link="/shop"
        />
        <Gallery />
        <div className="card-container">
          {cardData.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              title={data.title}
              description={data.description}
              buttonText={data.buttonText}
            />
          ))}
        </div>
        <ProductList showTitle={true} />
        <MultiFeatureBanner/>
        <PromoBanner
          backgroundImage={banner2}
          heading="New Collection"
          subheading="Exclusive Offers"
          description="Discover our new range of products at amazing prices. '\r\n' Limited stock available!"
          promoText="Shop now and get exclusive discounts on your first purchase."
          buttonText="Explore Now"
          link="/new-collection"
        />
        <ScrollProductBanner/>
        <VideoBanner/>
        <MobileBanner/>
        <InfoBanner />
        <SaleBanner />
        <SecondaryFooter />
      </>
      <SpeedDialTooltipOpen />
    </main>
  );
};


export default Home;
