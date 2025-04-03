'use client'
import VacancyCard from "@/components/Vacancy/VacancyCard/VacancyCard";
import { useEffect, useState } from "react";

// Компонент для отображения списка вакансий
export default function VacancyList({ type }: { type: string }) {
  const [vacancies, setVacancies] = useState<any[]>([]);

  // Загружаем вакансии по типу при изменении компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Делаем запрос к API с параметром type
        const response = await fetch(`/api/vacancy/all?type=${type}`);
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
  }, [type]); // Зависимость от типа вакансии

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {vacancies.map((vacancy: any, index: number) => (
        <div key={index}>
          <VacancyCard vacancy={vacancy} />
        </div>
      ))}
    </div>
  );
}
