import {
    Drill,
    HardHat,
    Hotel,
    MapPin,
    Package,
    PackagePlus,
    PaintRoller,
    Plane,
    Smile,
    UtilityPole,
  } from "lucide-react";
  
  export const vacancyMenuItems = [
    {
      title: "Все вакансии",
      icon: Package,
      description: "Все актуальные вакансии.",
      href: "/vacancy/all",
    },
    {
      title: "Новые вакансии",
      icon: PackagePlus,
      description: "Добавленые вакансии за последний месяц.",
      href: "/vacancy/new",
    },
    {
      title: "Внутреняя отделка",
      icon: PaintRoller,
      description: "Штукатурка, малярка, плитка, ГПК, электрика, сантехника...",
      href: "/vacancy/indor",
    },
    {
      title: "Уличные работы",
      icon: HardHat,
      description: "Брусчатка, строительные леса, каменьщики, арматура-бетон...",
      href: "/vacancy/outdor",
    },
    {
      title: "Электрика",
      icon: UtilityPole,
      description: "Слаботочка, солнечные панели, подкючение щитов, электроника...",
      href: "/vacancy/electric",
    },
    {
      title: "Сантехника",
      icon: Drill,
      description: "Сан-узлы, ванные комнаты, отопление...",
      href: "/vacancy/sanitary",
    },
  ];
  
  export const userfulMenuItems = [
    {
      title: "Польская рабочая виза",
      icon: MapPin,
      description: "Discover amazing places to visit.",
      href: `/userful/`,
    },
    {
      title: "PESEL в Польше",
      icon: Hotel,
      description: "Find the best stays for your trips.",
    },
    {
      title: "Открытие Банковского Счета",
      icon: Smile,
      description: "Get deals and tips on air travel.",
    },
    {
      title: "Документы для получения карты побыта",
      icon: Package,
      description: "Essential checklists for stress-free packing.",
    },
    {
      title: "Билеты по Евросоюзу: Источники",
      icon: Plane,
      description: "Exciting things to do wherever you go.",
    },
    
  ];
  
  export const partnersMenuItems = [
    {
      title: "Партнёрам",
      icon: Smile,
      description: "Добавленые вакансии за последний месяц.",
      href: `/partners/`,
    },
    {
      title: "Рекрутерам",
      icon: Smile,
      description: "Добавленые вакансии за последний месяц.",
      href: `/partners/`,
    }
  ]