import { SearchInput } from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import LogoYt from "@/components/ui/logoYt";
import VideoList from "@/components/videos/VideoList";
import { apiKey } from "@/lib/constans";
import Link from "next/link";
import React from "react";
import { FaAlignJustify } from "react-icons/fa";

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
          <div className="w-1/4 bg-yellow-500">
            <div className="flex flex-row items-center  p-2">
              <FaAlignJustify className="text-4xl p-2" />
            </div>
          </div>
          {/* konten kanan */}
          <div className="w-full mx-[10px] my-[10px]">
            {/* search */}
            <div className="flex justify-between items-center mb-5">
              <SearchInput />
              <div
                className="bg-red-50
              0 flex flex-row justify-end"
              >
                <div>1</div>
                <div>2</div>
              </div>
            </div>
            <div className="mb-[10px] flex flex-row gap-2 ">
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
              <Button className=" rounded-full">User Interface Design</Button>
            </div>
            <div className="mt-6">
              <VideoList videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
