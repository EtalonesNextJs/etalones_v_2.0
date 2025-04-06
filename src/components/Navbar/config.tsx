import {
  
    Backpack,
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
      href: "/vacancy/urban",
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
      title: "Hotels",
      icon: Hotel,
      description: "Find the best stays for your trips.",
    },
    {
      title: "Flights",
      icon: Plane,
      description: "Get deals and tips on air travel.",
    },
    {
      title: "Packing",
      icon: Package,
      description: "Essential checklists for stress-free packing.",
    },
    {
      title: "Activities",
      icon: Smile,
      description: "Exciting things to do wherever you go.",
    },
    {
      title: "Travel Tips",
      icon: Backpack,
      description: "Make every trip smooth and memorable.",
    },
  ];
  