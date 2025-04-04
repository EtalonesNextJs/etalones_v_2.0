// "use client"

// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
// import Image from "next/image"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Все вакансии",
//     href: "/vacancy/all",
//     description:
//       "Все вакансии",
//   },
//   {
//     title: "Новые вакансии",
//     href: "/vacancy/new",
//     description:
//       "Вакансии опубликованые в течении текушего месяца.",
//   },
//   {
//     title: "Срочно ищем человека",
//     href: "/docs/primitives/hover-card",
//     description:
//       "По этим вакансиям мы ищем одного хорошего мастера, проводим чательный отбор.",
//   },
//   {
//     title: "Внутреняя отделка",
//     href: "/docs/primitives/progress",
//     description:
//       "Штукатурка, малярка, плитка, ГПК, электрика, сантехника.",
//   },
//   {
//     title: "Уличные работы",
//     href: "/docs/primitives/scroll-area",
//     description: "Брусчадка, строительные леса, каменьщики, арматура-бетон.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

// export function Navigation() {
//   return (
//     <div className="flex justify-between items-center bg-primary py-2 px-10">
//   <NavigationMenu >
//       <NavigationMenuList >
//         <NavigationMenuItem >
//           <NavigationMenuTrigger className="bg-primary text-white hover:bg-secondary">Etalones S&B</NavigationMenuTrigger>
//           <NavigationMenuContent className="tetxt-white">
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild className=" text-white hover:bg-secondary ">
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <Image  width={60} height={60} src="/main/EtalonesCircle.png" alt={""} />
//                     <div className="mb-2 mt-4 text-lg text-black font-medium ">
//                       Etalones S&B
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                      Польская строительная компания, работаем по всей территории Европы.<br />
//                      Германия, Бельгия, Нидерланды и другие страны.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction" >
//                 <span >Re-usable components built using Radix UI and Tailwind CSS.</span>
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger className="bg-primary text-white hover:bg-secondary">Вакансии</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className=" grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link  href="/docs" legacyBehavior passHref >
//               <p className="bg-primary text-white hover:cursor-pointer">Documentation</p>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//     <Image src="/main/logoWhite.png" alt={""} width={150} height={150} className="ml-5"/>

//     </div>
  
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"
"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Все вакансии",
    href: "/vacancy/all",
    description: "Все вакансии",
  },
  {
    title: "Новые вакансии",
    href: "/vacancy/new",
    description: "Вакансии опубликованные в течении текущего месяца.",
  },
  {
    title: "Срочно ищем человека",
    href: "/docs/primitives/hover-card",
    description: "По этим вакансиям мы ищем одного хорошего мастера, проводим тщательный отбор.",
  },
  {
    title: "Внутреняя отделка",
    href: "/docs/primitives/progress",
    description: "Штукатурка, малярка, плитка, ГПК, электрика, сантехника.",
  },
  {
    title: "Уличные работы",
    href: "/docs/primitives/scroll-area",
    description: "Брусчатка, строительные леса, каменьщики, арматура-бетон.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "Набор секций контента, известный как панели вкладок.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "Всплывающее окно, которое отображает информацию, когда элемент получает фокус клавиатуры или при наведении мыши.",
  },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <div className="flex justify-between items-center bg-primary py-2 px-10">
      {/* Бургер-меню кнопка */}
      <button
        className="lg:hidden p-2 text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      <NavigationMenu>
        <NavigationMenuList
          className={cn(
            "flex space-x-4 lg:flex-row flex-col", 
            menuOpen ? "block" : "hidden lg:block"
          )}
        >
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-primary text-white hover:bg-secondary">
              Etalones S&B
            </NavigationMenuTrigger>
            <NavigationMenuContent className="text-white">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild className="text-white hover:bg-secondary">
                    <a
                      className="flex h-full w-full select-none flex-col justify-start rounded-md p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image width={60} height={60} src="/main/EtalonesCircle.png" alt={""} />
                      <div className="mb-2 mt-4 text-lg text-black font-medium">Etalones S&B</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Польская строительная компания, работаем по всей территории Европы.<br />
                        Германия, Бельгия, Нидерланды и другие страны.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-primary text-white hover:bg-secondary">Вакансии</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <p className="bg-primary text-white hover:cursor-pointer">Documentation</p>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Image src="/main/logoWhite.png" alt={""} width={150} height={150} className="ml-5" />
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
