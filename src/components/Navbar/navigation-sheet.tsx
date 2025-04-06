import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LucideIcon, Menu } from "lucide-react";
import Link from "next/link";
import { vacancyMenuItems, userfulMenuItems } from "./config";
import Image from "next/image";
export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-primary text-white">

        <Link href="/">
          <Image src="/main/logoWhite.png" alt={""} width={150} height={150} className="m-5 mb-0" />
          </Link>
        <div className=" text-base space-y-4 px-4">

          <div>
            <div className="font-bold">Вакансии</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {vacancyMenuItems.map((vacancyItem) => (
                <li key={vacancyItem.title}>
                  <Link href={vacancyItem.href ||"#"} className="flex items-center gap-2">
                    <vacancyItem.icon className="h-7 w-7 mr-2 text-[#DE9433]" />
                    {vacancyItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold">Travel</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {userfulMenuItems.map((item: { title: string; icon: LucideIcon; description: string; }) => (
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
