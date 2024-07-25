import React from "react";
import SecondarySection from "./secondarySection";
import SecondarySectionFour from "./secondarySectionFour";
import SecondarySectionOne from "./secondarySectionOne";
import '../css/footer.css'

const womenListData = [
  { item: "Women Jeans" },
  { item: "Tops and Shirts" },
  { item: "Women Jackets" },
  { item: "Heels and Flats" },
  { item: "Women Accessories" },
];
const menListData = [
  { item: "Men Jeans" },
  { item: "Men Shirts" },
  { item: "Men Shoes" },
  { item: "Men Jackets" },
  { item: "Men Accessories" },
];

const SecondaryFooter = () => {
  return (
    <div className="secondary-footer" >
      <SecondarySectionOne />
      <SecondarySection title="For Her" data={womenListData} />

      <SecondarySection title="For Him" data={menListData} />
      <SecondarySectionFour />
    </div>
  );
};

export default SecondaryFooter;
