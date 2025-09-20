import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex items-center ">
      <Image
        src="/logo/logo.svg"
        alt="Auralis Logo"
        width={40}
        height={40}
        className="h-8 md:h-10  w-auto"
      />
    </div>
  );
}
