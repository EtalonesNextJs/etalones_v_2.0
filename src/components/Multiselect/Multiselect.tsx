// "use client";
// import { X } from "lucide-react";
// import * as React from "react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Command,
//   CommandGroup,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Command as CommandPrimitive } from "cmdk";
// import { useCallback, useMemo } from "react";
// type Country = Record<"value" | "label", string>;
// const COUNTRIES = [
//   {
//     value: "us",
//     label: "United States",
//   },
//   {
//     value: "uk",
//     label: "United Kingdom",
//   },
//   {
//     value: "ca",
//     label: "Canada",
//   },
//   {
//     value: "au",
//     label: "Australia",
//   },
//   {
//     value: "fr",
//     label: "France",
//   },
//   {
//     value: "de",
//     label: "Germany",
//   },
//   {
//     value: "jp",
//     label: "Japan",
//   },
//   {
//     value: "br",
//     label: "Brazil",
//   },
// ] satisfies Country[];
// export default function MultiSelect() {
//   const [open, setOpen] = React.useState(false);
//   const [selected, setSelected] = React.useState<Country[]>([COUNTRIES[1]]);
//   const [inputValue, setInputValue] = React.useState("");
//   const handleUnselect = useCallback((country: Country) => {
//     setSelected((prev) => prev.filter((s) => s.value !== country.value));
//   }, []);
//   const handleKeyDown = useCallback(
//     (e: React.KeyboardEvent<HTMLInputElement>) => {
//       if (e.key === "Backspace" && selected.length > 0) {
//         setSelected((prev) => prev.slice(0, -1));
//       }
//     },
//     [selected]
//   );
//   const filteredCountries = useMemo(
//     () => COUNTRIES.filter((country) => !selected.includes(country)),
//     [selected]
//   );
//   return (
//     <div className="w-full">
//       <Command className="overflow-visible">
//         <div className="rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
//           <div className="flex flex-wrap gap-1">
//             {selected.map((country) => {
//               return (
//                 <Badge
//                   key={country.value}
//                   variant="secondary"
//                   className="select-none"
//                 >
//                   {country.label}
//                   <X
//                     className="size-3 text-muted-foreground hover:text-foreground ml-2 cursor-pointer"
//                     onMouseDown={(e) => {
//                       e.preventDefault();
//                     }}
//                     onClick={() => {
//                       handleUnselect(country);
//                     }}
//                   />
//                 </Badge>
//               );
//             })}
//             <CommandPrimitive.Input
//               onKeyDown={handleKeyDown}
//               onValueChange={setInputValue}
//               value={inputValue}
//               onBlur={() => setOpen(false)}
//               onFocus={() => setOpen(true)}
//               placeholder="Select countries..."
//               className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
//             />
//           </div>
//         </div>
//         <div className="relative mt-2">
//           <CommandList>
//             {open && !!filteredCountries.length && (
//               <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none">
//                 <CommandGroup className="h-full overflow-auto">
//                   {filteredCountries.map((country) => {
//                     return (
//                       <CommandItem
//                         key={country.value}
//                         onMouseDown={(e) => {
//                           e.preventDefault();
//                         }}
//                         onSelect={() => {
//                           setInputValue("");
//                           setSelected((prev) => [...prev, country]);
//                         }}
//                         className={"cursor-pointer"}
//                       >
//                         {country.label}
//                       </CommandItem>
//                     );
//                   })}
//                 </CommandGroup>
//               </div>
//             )}
//           </CommandList>
//         </div>
//       </Command>
//     </div>
//   );
// }
"use client";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState, useCallback, useMemo } from "react";

type Country = Record<"value" | "label", string>;

const COUNTRIES = [
  {
    value: "Паспорт ЕС",
    label: "Паспорт ЕС",
  },
  {
    value: "Паспорт",
    label: "Паспорт",
  },
  {
    value: "Польская виза",
    label: "Польская виза",
  },
  {
    value: "Карта побыта",
    label: "Карта побыта",
  },
  {
    value: "Биометрия Украины",
    label: "Биометрия Украины",
  },
  {
    value: "Песель",
    label: "Песель",
  },
  
] satisfies Country[];

export default function MultiSelect() {
  const [selected, setSelected] = useState<Country[]>([COUNTRIES[1]]);
  
  const handleToggleSelect = useCallback((country: Country) => {
    setSelected((prev) => {
      if (prev.some((selectedCountry) => selectedCountry.value === country.value)) {
        return prev.filter((s) => s.value !== country.value); // Unselect
      } else {
        return [...prev, country]; // Select
      }
    });
  }, []);

  return (
    <div className="w-full">
      <div className="rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((country) => {
            return (
              <Badge
                key={country.value}
                variant="secondary"
                className="select-none"
              >
                {country.label}
                <X
                  className="size-3 text-muted-foreground hover:text-foreground ml-2 cursor-pointer"
                  onClick={() => handleToggleSelect(country)} // Unselect when clicked
                />
              </Badge>
            );
          })}
        </div>
      </div>
      
      {/* Множественный выбор с кнопками */}
      <div className="mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {COUNTRIES.map((country) => (
            <button
              key={country.value}
              onClick={() => handleToggleSelect(country)}
              className={`p-2 rounded-md border ${selected.some((selectedCountry) => selectedCountry.value === country.value) ? "bg-[#116948] text-white" : "bg-white text-black"}`}
            >
              {country.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
