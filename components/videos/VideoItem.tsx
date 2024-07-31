// /** @format */

// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import Link from "next/link";
// import Image from "next/image";

// export default function VideoItem({ video }: { video: any }) {
//   return (
//     <Card>
//       <CardContent>
//         <Link href={`/videos/${video.id.videoId}`}>
//           <Image
//             width={500}
//             height={500}
//             alt=""
//             src={video.snippet.thumbnails.medium.url}
//           />
//         </Link>
//       </CardContent>
//       <CardFooter>
//         <div className="flex flex-col gap-1">
//           <h2 className="font-bold text-lg">
//             {video.snippet.channelTitle.slice(0, 20)}
//           </h2>
//           <h5 className="font-bold text-sm">
//             {video.snippet.title.slice(0, 15)} ...
//           </h5>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

import Image from "next/image";
import Link from "next/link";

const VideoItem = ({ video }: { video: any }) => {
  return (
    <div className="max-w-sm bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
      <div className="">
        <Link href={`/videos/${video.id.videoId}`}>
          <Image
            width={500}
            height={500}
            alt=""
            src={video.snippet.thumbnails.medium.url}
          />
        </Link>
        <div className="p-4 bg-black bg-opacity-50 w-full flex flex-row gap-2">
          <div className=" rounded-full object-cover overflow-hidden w-[30px] h-[30px] ">
            <Image
              src={video.snippet.thumbnails.default.url}
              alt="image"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">
              {video.snippet.channelTitle.slice(0, 10)}...
            </h3>
            <p className="text-sm">{video.snippet.title.slice(0, 15)} ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
