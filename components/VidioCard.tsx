import Image from "next/image";

const VideoCard = () => {
  return (
    <div className="max-w-sm bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <Image
          src="/mnt/data/image.png"
          alt="Bulbuli | Coke Studio Bangla"
          width={400}
          height={400}
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
          <h3 className="text-lg font-bold">Bulbuli | Coke Studio Bangla</h3>
          <p className="text-sm">Season One | Ritu Raj X Nandita</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
