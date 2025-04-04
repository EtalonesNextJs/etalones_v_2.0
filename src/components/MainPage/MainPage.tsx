import Image from "next/image"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Hero from "./Hero/Hero";
import FormCallBack from "../FormCallBack/FormCallBack";
import Hero06 from "../Hero/Hero";
import VacancyList from "../Vacancy/VacancyList/VacancyList";
import { User } from "lucide-react";
import Userfull from "../Userfull/Userfull";
import Testimonial04 from "../VacancyActual/VacancyActual";
import News from "../News/News";
import FormSubscribe from "../FormSubscribe/FormSubscribe";

export default function MainPage() {

    function getCurrentDate() {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ru-RU', options);
      }
    const text= `Актуальные вакансии на ${getCurrentDate()}`
  return (
    <div >    
    <Hero06 />
    <FormCallBack />
    <div className="text-3xl font-bold text-center text-red-700 p-2 md:px-10 py-3 ">{text}</div>
    {/* <Testimonial04/> */}
    <VacancyList type="all" limit={3} />
    <Userfull/>
    <News/>
    <FormSubscribe/>
    </div>
)}