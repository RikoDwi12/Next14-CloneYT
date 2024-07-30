import Image from "next/image";
import Link from "next/link";

const LogoYt = () => {
  return (
    <Link href="/videos">
      <Image
        src="/logoYT.png"
        alt="Logo"
        width={50}
        height={50}
        className="object-contain"
      />
    </Link>
  );
};

export default LogoYt;
