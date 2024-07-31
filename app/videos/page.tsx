import CardSideBar from "@/components/CardSideBar";
import { ModeToggle } from "@/components/modeToggle";
import { SearchInput } from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import VideoList from "@/components/videos/VideoList";
import { apiKey } from "@/lib/constans";
import Link from "next/link";
import React from "react";
import { FaAlignJustify, FaCompass, FaHome, FaPlay } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

async function fetchVideos(query: string) {
  let url = new URL(
    `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`
  );
  url.searchParams.set("maxResults", "10");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const videos = await fetch(url);
    return videos.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Videos({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const videos = await fetchVideos(searchParams.query);

  return (
    <>
      {/* warps div */}
      <div className="my-[10px] mx-[10px] ">
        <div className=" flex flex-row">
          {/* konten */}
          <div className="w-1/4 bg-slate-400 rounded-sm">
            <div className="flex flex-row items-center  p-2">
              <FaAlignJustify className="text-4xl p-2 " />
            </div>
            {/* kiri 1 */}
            <CardSideBar />
            <hr className=" border-slate-100" />
            {/* konten kiri 2 */}
            <CardSideBar />
            <hr className=" border-slate-100" />
            {/* konten kiri 3 */}
            <CardSideBar />
            <hr className="border-slate-100" />
            {/* konten kiri 4 */}
            <CardSideBar />
          </div>
          {/* konten kanan */}
          <div className="w-full mx-[10px] my-[5px]">
            {/* search */}
            <div className="flex justify-between items-center mb-5">
              <SearchInput />
              <div className="flex flex-row justify-end gap-2">
                <FaRegBell className="text-4xl p-2" />
                <FaTh className="text-4xl p-2" />
                <FaRegBell className="text-4xl p-2" />
                <ModeToggle />
              </div>
            </div>
            <hr className="p-1 border-slate-100 dark:border-white" />
            <div className="mb-[10px] flex flex-row gap-2 overflow-x-auto whitespace-nowrap p-2">
              <Button className="bg-white rounded-full">All</Button>
              <Button className=" rounded-full">Cook Studio</Button>
              <Button className=" rounded-full">UX</Button>
              <Button className=" rounded-full">Case Study</Button>
              <Button className=" rounded-full">Music</Button>
              <Button className=" rounded-full">Bnagla Lofi</Button>
              <Button className=" rounded-full">Tour</Button>
              <Button className=" rounded-full">Saintmartin</Button>
              <Button className=" rounded-full">Tech</Button>
              <Button className=" rounded-full">iPhone 13</Button>
            </div>
            <hr className="p-1 border-slate-100 dark:border-white" />
            <div className="mt-1">
              <VideoList videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
