'use client';

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import cookies from 'js-cookie';
import Link from "next/link";
import { toast } from "sonner";

const Card = ({ avatarData }: any) => {
  const handleCardSelect = () => {
    cookies.set(
      "__avatar",
      JSON.stringify({
        id: avatarData?._id,
        gender: avatarData?.avatar_meta?.gender,
        url: avatarData?.avatar_url,
        display_url: avatarData?.avatar_url,
      })
    );
    toast.success("Avatar Selected !!");
  }

  return (
    <Link
      href={`/home`}
      className={cn(
        "relative inline-flex rounded-2xl overflow-hidden w-full h-72 p-[2px]"
      )}
      onClick={handleCardSelect}
    >
      {/* <span
        className={cn(
          "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-yellow-500",
          avatarData?.profile_picture?.webp
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            : "bg-yellow-500 opacity-30 animate-pulse"
        )}
      /> */}
      <div className="relative inline-flex items-center justify-center rounded-2xl overflow-hidden h-full w-full bg-primary text-white">
        {avatarData?.profile_picture?.webp ? (
          <Image
            src={avatarData?.profile_picture?.webp}
            className={cn(
              "object-cover h-full w-full duration-300 ease-in-out"
            )}
            alt={"loading..."}
            fill
          />
        ) : (
          <p className="text-white">loading...</p>
        )}
      </div>
      {avatarData?.profile_picture?.webp && (
        <div className="absolute z-20 bg-gradient-to-b from-transparent via-black/80 to-black/60 h-24 w-full bottom-0 left-0"></div>
      )}
    </Link>
  );
};

export default Card;
