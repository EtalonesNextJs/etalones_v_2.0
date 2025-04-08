'use client'
import { Button } from "@/components/ui/button";
import { ArrowUpRight, PenLine } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog";
import ContactForm from "../Forms/ContactForm";
import { DialogTitle } from "@radix-ui/react-dialog";
import PrimayForm from "../Forms/PrimaryForm";

const Hero = () => {
  const [open, setOpen] = useState(false);
   const [vacancyCount, setVacancyCount] = useState<number | null>(null);
    const [totalPositionsAvailable, setTotalPositionsAvailable] = useState<number | null>(null);
  
    useEffect(() => {
      const fetchStats = async () => {
        try {
          const res = await fetch('/api/stats');
          const data = await res.json();
          setVacancyCount(data.vacancyCount);
          setTotalPositionsAvailable(data.place);
        } catch (error) {
          console.error('Ошибка загрузки данных:', error);
        }
      };
  
      fetchStats();
    }, []);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <div className="min-h-2/3 flex items-center justify-center px-6 " 
    style={{ backgroundImage: 'url(/main/primary_sh.jpg)', backgroundSize: 'cover', backgroundPosition: 'right' }}>
      <BackgroundPattern />

      <div className="relative z-10 text-center text-white max-w-2xl my-5">
        {/* <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          Just released v1.0.0
        </Badge> */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
        Ищете работу в Европе?
        </h1>
        <div className="mt-6 text-[17px] md:text-lg">
        На данный момент открыто &nbsp;
        {vacancyCount !== null ? <CountUp end={vacancyCount} duration={4} /> : '...'} вакансий,
        и &nbsp;
        {totalPositionsAvailable !== null ? <CountUp end={totalPositionsAvailable} duration={4} /> : '...'} свободных мест
        </div>
        <div className="mt-12 flex items-center justify-center flex-wrap gap-4">
        <Link href="/vacancy/all">
          <Button size="lg"  className="rounded-full text-base ">
            Смотреть предложения <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          </Link>
          <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-black shadow-none cursor-pointer"
          >
            <PenLine className="!h-5 !w-5" /> Заполнить анкету
          </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>
              Анкета работника
            </DialogTitle>
            <PrimayForm setOpen={setOpen}/>
          </DialogContent>
        </div>
      </div>
    </div>
    </Dialog>
  );
};

export default Hero;
