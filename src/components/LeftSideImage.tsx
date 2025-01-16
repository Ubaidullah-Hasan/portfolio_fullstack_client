"use client"
import { BackgroundOfMyImg } from "@/src/components/icons";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";
// import { Image as NextUIImage } from "@nextui-org/image";


const LeftSideImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="relative flex items-center justify-center mt-3 mb-12">
      {!imageLoaded &&
        <Skeleton
          className="absolute z-[0] bg-red-500 rounded-full w-[300] h-[300] object-cover"
        />
      }
       <Image
        className="object-cover z-10"
        height={300}
        src={"https://i.ibb.co.com/D1rY7NG/960kb.jpg"}
        width={300}
        radius="full"
        onLoad={() => setImageLoaded(true)}
      />

      {imageLoaded && <BackgroundOfMyImg
        className="absolute z-[0] animate-spin ease-out"
        height={365}
        style={{ animationDuration: "10s" }}
        width={365}
      />}
    </div>
  )
}

export default LeftSideImage;
