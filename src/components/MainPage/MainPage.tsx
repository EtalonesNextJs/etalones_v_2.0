import Image from "next/image"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Hero from "./Hero/Hero";
import FormCallBack from "../FormCallBack/FormCallBack";

export default function MainPage() {
  return (
    <div >
        {/* <div className="w-full h-[600px]">
    <AspectRatio ratio={16 / 9} >
    <Image src="/main/primary.jpg" 
    className="rounded-md object-cover"
    alt={""} width={1600} height={1600} />
    </AspectRatio>
        </div> */}
    <Hero />
    <FormCallBack/>
    </div>
)}