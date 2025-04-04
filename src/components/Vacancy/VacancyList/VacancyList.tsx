// 'use client'
// import VacancyCard from "@/components/Vacancy/VacancyCard/VacancyCard";
// import { useEffect, useState } from "react";

// // Компонент для отображения списка вакансий
// export default function VacancyList({ type }: { type: string }) {
//   const [vacancies, setVacancies] = useState<any[]>([]);

//   // Загружаем вакансии по типу при изменении компонента
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Делаем запрос к API с параметром type
//         const response = await fetch(`/api/vacancy/all?type=${type}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch vacancy');
//         }

//         const data: any = await response.json();
//         setVacancies(data); // Сохраняем вакансии в состоянии
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [type]); // Зависимость от типа вакансии

//   return (
//     <div className="flex flex-wrap justify-center gap-4">
//       {vacancies.map((vacancy: any, index: number) => (
//         <div key={index}>
//           <VacancyCard vacancy={vacancy} />
//         </div>
//       ))}
//     </div>
//   );
// }
'use client';
import VacancyCard from "@/components/Vacancy/VacancyCard/VacancyCard";
import { useEffect, useState } from "react";

// Компонент для отображения списка вакансий
export default function VacancyList({ type, limit }: { type: string; limit?: number }) {
  const [vacancies, setVacancies] = useState<any[]>([]);

  // Загружаем вакансии по типу при изменении компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Делаем запрос к API с параметром type и limit (если он передан)
        const url = `/api/vacancy/all?type=${type}${limit ? `&limit=${limit}` : ""}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch vacancy');
        }

        const data: any = await response.json();
        setVacancies(data); // Сохраняем вакансии в состоянии
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [type, limit]); // Зависимость от типа вакансии и лимита

  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="w-full">
      {/* <h2 className="text-2xl text-primary sm:text-5xl font-bold tracking-tight text-center">
        Вакансии
      </h2> */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
        {vacancies.map((vacancy: any, index: number) => (
          <div key={index}>
              <VacancyCard vacancy={vacancy} />
          </div>
        ))}
      </div>
    </div>
  </div>
    // <div className="flex flex-wrap justify-center gap-4">
    //   {vacancies.map((vacancy: any, index: number) => (
    //     <div key={index}>
    //       <VacancyCard vacancy={vacancy} />
    //     </div>
    //   ))}
    // </div>
  );
}
