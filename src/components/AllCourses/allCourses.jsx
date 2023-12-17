import React from "react";
import { CustomCard } from "../customCard/customCard";
import cardImg1 from "../../../public/assets/card-img-1.jpg";
import cardImg2 from "../../../public/assets/card-img-2.jpg";
import cardImg3 from "../../../public/assets/card-img-3.jpg";

const AllCourses = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-[25px] justify-center mt-12 mb-12">
      <CustomCard
        imgSrc={cardImg1}
        title="This is a one line title"
        subtitle="Two line paragraph Lorem ipsum dolor sit amet,consectetur"
        variant="Discount"
        saveAmount="$250"
        currentAmount="$750"
        prevAmount="$1050"
        isFree={true}
      />

      <CustomCard
        imgSrc={cardImg2}
        title="This is a one line title"
        subtitle="Two line paragraph Lorem ipsum dolor sit amet,consectetur"
        variant="No Discount"
        currentAmount="$750"
        isFree={false}
      />

      <CustomCard
        imgSrc={cardImg3}
        title="This is a one line title"
        subtitle="Two line paragraph Lorem ipsum dolor sit amet,consectetur"
        variant="Free"
        currentAmount="$750"
        isFree={false}
      />
    </div>
  );
};

export default AllCourses;
