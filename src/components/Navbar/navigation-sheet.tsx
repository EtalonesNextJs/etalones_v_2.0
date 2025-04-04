import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { foods, travelMenuItems } from "./config";
import { Logo } from "./logo";
import Image from "next/image";
export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#870B0B] text-white">
        {/* <Logo /> */}

        <Link href="/">
          <Image src="/main/logoWhite.png" alt={""} width={150} height={150} className="m-5 mb-0" />
          </Link>
        <div className=" text-base space-y-4 px-4">

          <div>
            <div className="font-bold">Вакансии</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {foods.map((foodItem) => (
                <li key={foodItem.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <foodItem.icon className="h-7 w-7 mr-2 text-[#DE9433]" />
                    {foodItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold">Travel</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {travelMenuItems.map((item: any) => (
                <li key={item.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
