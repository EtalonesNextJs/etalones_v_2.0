import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { HandCoins, MapPin, MapPinned } from "lucide-react"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import DrawerContentComponent from "@/components/Drawer/DrawerContentComponent"
import { Dialog } from "@/components/ui/dialog"
import DialogAnketaContent from "@/components/Dialog/DialogAnketaContent"
export default function VacancyCard( { vacancy }: { vacancy: any }) {
  return (
    <Dialog>
    <Drawer>
    <Card className="w-full max-w-[400px] ">
      <AspectRatio ratio={16 / 9} className="box-content">
      <Image src={vacancy?.imageFB || ''} alt={"Vacancy"} width={400} height={200} />
      </AspectRatio>
      <CardHeader className="mt-6">
        <CardTitle className="text-xl">{vacancy?.title}</CardTitle>
        <CardDescription>
          {vacancy?.roof_type}
          </CardDescription>
      </CardHeader>
      <CardContent className="font-semibold flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <MapPinned  className="text-[var(--color-primary)]" />
          <p className="text-xl">{vacancy?.location}</p>
        </div>
        <div className="flex items-center gap-2">
          <HandCoins  />
          <p className="text-xl">{vacancy?.salary}</p>
        </div>
        <p>{vacancy?.home_descr}</p>
        <p>{vacancy?.skills}</p>
        <p>{vacancy?.experience}</p>
      </CardContent>
      <CardFooter>
      <DrawerTrigger asChild>
      <Button >Подробнее</Button>
      </DrawerTrigger>
        <DrawerContentComponent vacancy={vacancy} />
      </CardFooter>
    </Card>
    </Drawer>
    <DialogAnketaContent/>
    </Dialog>
)}