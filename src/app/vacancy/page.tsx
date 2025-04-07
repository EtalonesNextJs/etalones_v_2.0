'use client'

import { useState, useEffect } from 'react';
import {  useSearchParams } from 'next/navigation';
import VacancyCard from "@/components/Vacancy/VacancyCard/VacancyCard";

export default function VacancyList() {
  const [vacancies, setVacancies] = useState<any[]>([]);
  const searchParams = useSearchParams(); // Get search params (like ?type=new)

  const type = searchParams.get("type");  // Extract type from URL

  useEffect(() => {
    const fetchData = async () => {
      if (!type) return;

      try {
        const response = await fetch(`/api/vacancy/all?type=${type}`);
        if (!response.ok) {
          throw new Error('Failed to fetch vacancy');
        }

        const data = await response.json();
        setVacancies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [type]);  // Refetch when type changes (on URL change)

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {vacancies.map((vacancy, index) => (
        <div key={index}>
          <VacancyCard vacancy={vacancy} />
        </div>
      ))}
    </div>
  );
}
