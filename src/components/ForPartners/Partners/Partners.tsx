'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-select";
import { ArrowRight, ArrowUpRight, Blocks, Building2, Calendar, CircleCheck, CirclePlay, MailIcon, MapPinIcon, PhoneIcon, PlusIcon, Settings2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const faq = [
    {
        question: "What is your return policy?",
        answer:
            "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
    },
    {
        question: "How do I track my order?",
        answer:
            "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
    },
    {
        question: "Do you ship internationally?",
        answer:
            "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
    },
    {
        question: "What if I receive a damaged item?",
        answer:
            "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
    },
    {
        question: "Can I cancel or change my order?",
        answer:
            "Yes, you can cancel or change your order within 24 hours of placing it. Contact customer support to make updates.",
    },
    {
        question: "Do you offer discounts for bulk purchases?",
        answer:
            "Yes, we provide special discounts for bulk orders. Contact our sales team with your requirements for a customized quote.",
    },
    {
        question: "How long does shipping take?",
        answer:
            "Shipping usually takes 3-7 business days domestically and 7-14 business days internationally, depending on your location and selected shipping method.",
    },
    {
        question: "Are your products eco-friendly?",
        answer:
            "Many of our products are made with sustainable materials and eco-friendly practices to reduce environmental impact while maintaining quality.",
    },
    {
        question: "How can I contact customer support?",
        answer:
            "Reach out via email at support@example.com or call us at 1-800-123-4567 for assistance with any inquiries.",
    },
];

const plans = [
    {
        name: "Starter",
        price: 19,
        description:
            "Get 20 AI-generated portraits with 2 unique styles and filters.",
        features: [
            "5 hours turnaround time",
            "20 AI portraits",
            "Choice of 2 styles",
            "Choice of 2 filters",
            "2 retouch credits",
        ],
        buttonText: "Get 20 portraits in 5 hours",
    },
    {
        name: "Advanced",
        price: 29,
        isRecommended: true,
        description:
            "Get 50 AI-generated portraits with 5 unique styles and filters.",
        features: [
            "3 hours turnaround time",
            "50 AI portraits",
            "Choice of 5 styles",
            "Choice of 5 filters",
            "5 retouch credits",
        ],
        buttonText: "Get 50 portraits in 3 hours",
        isPopular: true,
    },
    {
        name: "Premium",
        price: 49,
        description:
            "Get 100 AI-generated portraits with 10 unique styles and filters.",
        features: [
            "1-hour turnaround time",
            "100 AI portraits",
            "Choice of 10 styles",
            "Choice of 10 filters",
            "10 retouch credits",
        ],
        buttonText: "Get 100 portraits in 1 hour",
    },
];

const experiences = [
    {
        title: "Трудоустройство в Etalones S&B",
        company: "Предварительные документы",
        period: "1-2 рабочих дня",
        description:
            "Мы трудоустраиваем работников на нашу компанию по Умове злицения, также мы готовим все внутриние документы.",
        technologies: ["Страховка", "Техника безопасности", "Мед. осведетельствоние", "Доп. соглашение"],
    },
    {
        title: "ZUS",
        company: "Документы от официальных Польских гос. органов",
        period: "3-4 рабочих дня",
        description:
            "Подача работника на командировачный лист А1, регистрация предварительного бланка ZUS, в неё мы указываем:",
        technologies: ["Место работы", "Фирму партнёра", "Сроки командировки", "Docker", "Redis"],
    },
    {
        title: "Frontend Developer",
        company: "WebTech Studios",
        period: "2018 - 2021",
        description:
            "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
        technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
    },
];

const Partners = () => {
    const [value, setValue] = useState<string>();
    return (
        <>
            <div className="max-h-screen flex items-center justify-center">
                <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
                    <div>

                        <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
                            Откройте новые возможности для вашего бизнесса вместе с Etalones
                        </h1>
                        <p className="mt-6 max-w-[60ch] text-lg">
                            Присоединяйтесь к нашей команде, и оптимизируйте расходы на зарплаты работников, сократите расходы на налоги, освободите
                            ваше время для развития бизнесса и поиска новых заказов.
                        </p>

                    </div>
                    <div className="w-fit">
                        <Image src={'/partners/40precent.png'} width={450} height={450} alt="searchPeople"
                            className="rounded-xl"
                        />
                    </div>
                    {/* <Image src={'/partners/40precent.png'} width={350} height={350} alt="40%" className="rounded-xl" /> */}
                </div>
            </div>
            <div className="min-h-screen  flex items-center justify-center">
                <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
                    <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
                        Мы предлогаем: <br />
                        Воспользоваться всеми преимуществами совместной работы
                    </h2>
                    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className=" rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                            {/* Media 1 Mobile */}
                            <div className="md:hidden mb-6  w-full bg-background border rounded-xl">
                                <Image src={'/partners/searchPeople.png'} width={350} height={350} alt="searchPeople"
                                    className="rounded-xl"
                                />
                            </div>
                            <span className="text-2xl font-semibold tracking-tight">
                                Поиск специалистов для выполнения поставленых задач
                            </span>
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <div className="flex items-start gap-3">
                                        <Settings2 className="shrink-0" />
                                        <p className="-mt-0.5">
                                            Сбор подробной информации о предсояшей работе и необходимых сотрудниках
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-start gap-3">
                                        <Blocks className="shrink-0" />
                                        <p className="-mt-0.5">
                                            Настройка рекламной компани по привлечению необходимых специалистов
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <Button className="mt-12 w-full">
                                Ознакомится подробнее <ArrowRight />
                            </Button>
                        </div>
                        {/* Media 1 Desktop */}
                        <div className="hidden md:flex justify-end col-span-1 md:col-span-3 lg:col-span-2">
                            <div className="w-fit">
                                <Image
                                    src={'/partners/searchPeople.png'}
                                    width={350}
                                    height={350}
                                    alt="searchPeople"
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                        {/* Media 2 Desktop */}
                        <div className="hidden md:block my-auto col-span-1 md:col-span-3 lg:col-span-2">
                            <Image src={'/partners/19612.jpg'} width={450} height={450} alt="searchPeople"
                                className="rounded-xl"
                            />
                        </div>
                        {/* Card 2 */}
                        <div className="rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                            {/* Media 2 Mobile */}
                            <div className="md:hidden mb-6  w-fit rounded-xl">
                                <Image src={'/partners/19612.jpg'} width={450} height={450} alt="searchPeople"
                                    className="rounded-xl"
                                />
                            </div>
                            <span className="text-2xl font-semibold tracking-tight">
                                Предварительное собеседование
                            </span>
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <div className="flex items-start gap-3">
                                        <Settings2 className="shrink-0" />
                                        <p className="-mt-0.5">
                                            Сбор полной анкеты кандидата, включая специальные навыки, опыт работы,
                                            опыт работы в Европе, возраст, занятость, местоположение, готовность к выполнению работ, и другое.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-start gap-3">
                                        <Blocks className="shrink-0" />
                                        <p className="-mt-0.5">
                                            Подбор максималььно подходящей вакансии, проверка на соответствие требованиям кандидату.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <Button className="mt-12 w-full">
                                Подробнее <ArrowRight />
                            </Button>
                        </div>
                        {/* Card 3 */}
                        <div className=" rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                            {/* Media 3 Mobile */}
                            <div className="md:hidden mb-6  w-full bg-background border rounded-xl">
                                <Image src={'/partners/successful-meeting.jpg'} width={350} height={350} alt="searchPeople"
                                    className="rounded-xl"
                                />
                            </div>
                            <span className="text-2xl font-semibold tracking-tight">
                                Собеседование с куратором объекта
                            </span>
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <div className="flex items-start gap-3">
                                        <Settings2 className="shrink-0" />
                                        <p className="-mt-0.5">
                                            За каждым партнёром закреплён собственный менеджер,
                                            он знает всю детальную информацию о представленных работах и необходимых сотрудниках.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-start gap-3">
                                        <Blocks className="shrink-0" />
                                        <p className="-mt-0.5">
                                        В ходе этого собеседования, менеджер окончательно определяет квалификацию работника,
                                        оценивает комуникацию кандидата, возможности долгосрочного сотрудничевства, возможные форс-мажоры.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <Button className="mt-12 w-full">
                                Ознакомится подробнее <ArrowRight />
                            </Button>
                        </div>
                        {/* Media 3 Desktop */}
                        <div className="hidden md:flex justify-end col-span-1 md:col-span-3 lg:col-span-2">
                            <div className="w-fit my-auto">
                                <Image
                                    src={'/partners/successful-meeting.jpg'}
                                    width={450}
                                    height={450}
                                    alt="searchPeople"
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                         {/* Media 2 Desktop */}
                         <div className="hidden md:block my-auto col-span-1 md:col-span-3 lg:col-span-2">
                            <Image src={'/partners/19612.jpg'} width={450} height={450} alt="searchPeople"
                                className="rounded-xl"
                            />
                        </div>
                        {/* Card 2 */}
                        <div className="rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                            {/* Media 2 Mobile */}
                            <div className="md:hidden mb-6  w-fit rounded-xl">
                                <Image src={'/partners/19612.jpg'} width={450} height={450} alt="searchPeople"
                                    className="rounded-xl"
                                />
                            </div>
                            <span className="text-2xl font-semibold tracking-tight">
                                Собеседование с партнёром, согласование выезда 
                            </span>
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <div className="flex items-start gap-3">
                                        <Settings2 className="shrink-0" />
                                        <p className="-mt-0.5">
                                            Передаём акнету кандидата партнёру,
                                            согласовываем дату и порядок собеседования.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-start gap-3">
                                        <Blocks className="shrink-0" />
                                        <p className="-mt-0.5">
                                        В ходе последнего собеседования, партнёр определяет квалификацию работника,
                                        согласовывается дата прибытия на объект.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <Button className="mt-12 w-full">
                                Подробнее <ArrowRight />
                            </Button>
                        </div>
                       
                    </div>
                </div>
            </div>
            
            <div className="max-w-screen-sm mx-auto py-12 md:py-20 px-6">
            <h2 className="text-3xl mb-5 leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
                Документы работника <br />
                Сроки изготовления:
                    </h2>
                <div className="relative ml-3">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-4 bottom-0 border-l-2" />
                    {experiences.map(
                        ({ company, description, period, technologies, title }, index) => (
                            <div key={index} className="relative pl-8 pb-12 last:pb-0">
                                {/* Timeline dot */}
                                <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />
                                {/* Content */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                                            <Building2 className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <span className="text-base sm:text-lg font-semibold">
                                            {company}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                                        <div className="flex items-center gap-2 mt-1 text-sm">
                                            <Calendar className="h-4 w-4" />
                                            <span>{period}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm sm:text-base text-muted-foreground">
                                        {description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="rounded-full"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
                <h1 className="text-5xl font-bold text-center tracking-tight">Pricing</h1>
                <div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.name} className="border rounded-lg p-6">
                            <h3 className="text-lg font-medium">{plan.name}</h3>
                            <p className="mt-2 text-4xl font-bold">${plan.price}</p>
                            <p className="mt-4 font-medium text-muted-foreground">
                                {plan.description}
                            </p>
                            <Separator className="my-4" />
                            <ul className="space-y-2">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <CircleCheck className="h-4 w-4 mt-1 text-green-600" />{" "}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.isPopular ? "default" : "outline"}
                                size="lg"
                                className="w-full mt-6"
                            >
                                {plan.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="min-h-screen flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-screen-lg">
                    <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-6 w-full grid md:grid-cols-2 gap-x-10">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            value={value}
                            onValueChange={setValue}
                        >
                            {faq.slice(0, 5).map(({ question, answer }, index) => (
                                <AccordionItem key={question} value={`question-${index}`}>
                                    <AccordionTrigger
                                        className="flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45"
                                    >
                                        {question}
                                    </AccordionTrigger>
                                    {/* <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" /> */}
                                    <AccordionContent>{answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            value={value}
                            onValueChange={setValue}
                        >
                            {faq.slice(5).map(({ question, answer }, index) => (
                                <AccordionItem key={question} value={`question-${index + 5}`}>
                                    <AccordionTrigger
                                        className="flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45" >
                                        {question}
                                        {/* <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" /> */}
                                    </AccordionTrigger>

                                    <AccordionContent>{answer}</AccordionContent>

                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <b className="text-muted-foreground">Contact Us</b>
                    <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-base sm:text-lg">
                        Our friendly team is always here to chat.
                    </p>
                    <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
                        <div className="text-center flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                <MailIcon />
                            </div>
                            <h3 className="mt-6 font-semibold text-xl">Email</h3>
                            <p className="mt-2 text-muted-foreground">
                                Our friendly team is here to help.
                            </p>
                            <Link
                                className="mt-4 font-medium text-primary"
                                href="mailto:akashmoradiya3444@gmail.com"
                            >
                                akashmoradiya3444@gmail.com
                            </Link>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                <MapPinIcon />
                            </div>
                            <h3 className="mt-6 font-semibold text-xl">Office</h3>
                            <p className="mt-2 text-muted-foreground">
                                Come say hello at our office HQ.
                            </p>
                            <Link
                                className="mt-4 font-medium text-primary"
                                href="https://map.google.com"
                                target="_blank"
                            >
                                100 Smith Street Collingwood <br /> VIC 3066 AU
                            </Link>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                <PhoneIcon />
                            </div>
                            <h3 className="mt-6 font-semibold text-xl">Phone</h3>
                            <p className="mt-2 text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
                            <Link
                                className="mt-4 font-medium text-primary"
                                href="tel:akashmoradiya3444@gmail.com"
                            >
                                +1 (555) 000-0000
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partners;
