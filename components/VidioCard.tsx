// import Image from "next/image";
// import Link from "next/link";

// const VideoItem = ({ video }: { video: any }) => {
//   return (
//     <div className="max-w-sm bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
//       <div className="relative">
//         <Link href={`/videos/${video.id.videoId}`}>
//           <Image
//             width={500}
//             height={500}
//             alt=""
//             src={video.snippet.thumbnails.medium.url}
//           />
//         </Link>
//         <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
//           <h3 className="text-lg font-bold">
//             {video.snippet.channelTitle.slice(0, 20)}
//           </h3>
//           <p className="text-sm">{video.snippet.title.slice(0, 15)} ...</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoItem;
