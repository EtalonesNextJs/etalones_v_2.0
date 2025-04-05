import FormCallBack from "../FormCallBack/FormCallBack";
import Hero06 from "../Hero/Hero";
import VacancyList from "../Vacancy/VacancyList/VacancyList";
import Userfull from "../Userfull/Userfull";
import News from "../News/News";
import FormSubscribe from "../FormSubscribe/FormSubscribe";
import Footer from "../Footer/Footer";
import NewsList from "../News/NewsList/NewsList";

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
    <div className="text-3xl font-bold text-center text-[#870B0B] p-2 md:px-10 py-3 ">{text}</div>
    {/* <Testimonial04/> */}
    <VacancyList type="all" limit={3} />
    <Userfull/>
    <NewsList type="all_news" limit={3} />
    <FormSubscribe/>
    <Footer/>
    </div>
)}