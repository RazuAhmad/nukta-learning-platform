"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

export const CustomCard = ({
  title,
  subtitle,
  saveAmount,
  currentAmount,
  prevAmount,
  variant,
  isFree,
  imgSrc,
}) => {
  return (
    <div className="max-w-[254px] ">
      {/* Card header */}
      <h1 className="text-center mb-[37px]">
        When course has <br /> <span className="text-[#818181]">{variant}</span>
      </h1>

      {/* Main card  */}
      <div className=" shadow-lg rounded-lg">
        <Image
          src={imgSrc}
          style={{ width: "100%", height: "157px", marginBottom: "10px" }}
          alt="course-img"
        />
        <div className="">
          <h1 className=" text-[#1E1E1E] font-medium text-xl mb-[6px]">
            {title}
          </h1>
          <p className="mb-[10px]">{subtitle}</p>

          {/* Price segment */}
          <div
            className={
              isFree
                ? `flex justify-between px-[10px] pb-[10px] border-b-2`
                : ` px-[10px] pb-[10px] border-b-4`
            }
          >
            {isFree && <p className="line-through">{prevAmount}</p>}
            <p className="">{currentAmount}</p>

            {isFree && (
              <p className="bg-[rgb(149,227,227)] rounded-3xl px-1 ">
                You Save {saveAmount}
              </p>
            )}
          </div>

          {/* course details */}
          <div className="flex items-center gap-[11px] px-[10px] py-[10px]">
            {/* duration */}
            <div className="flex items-center gap-[5.44px]">
              <Icon icon="ph:clock" width="20" />
              <p>10 hrs</p>
            </div>

            {/* total students */}
            <div className="flex items-center gap-[5.44px]">
              <Icon icon="ph:users" width="20" />
              <p>308</p>
            </div>

            {/* total book */}
            <div className="flex items-center gap-[5.44px]">
              <Icon icon="iconoir:book" width="20" />
              <p>17</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
