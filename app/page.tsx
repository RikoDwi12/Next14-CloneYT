import { SearchInput } from "@/components/SearchInput";
import VideoList from "@/components/videos/VideoList";
import VideoCard from "@/components/VidioCard";
import React from "react";

export default function Videos({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <>
      {/* warps div */}
      <div className="mx-[64px] my-[40px]">
        <div className="flex justify-end items-center mb-[20px]">
          <SearchInput />
        </div>
        <div className="grid-rows-3 gap-2">
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </>
  );
}
