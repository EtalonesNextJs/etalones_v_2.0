'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';

export default function VacancyList() {
  const [vacancies, setVacancies] = useState<any[]>([]);
  const params = useParams(); 
  const type = params?.type || 'all'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/vacancy/all?type=${type}`);
        if (!response.ok) throw new Error('Не удалось загрузить вакансии');

        const data = await response.json();
        setVacancies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [type]);

  const translateType = (type: any) => {
    switch (type) {
      case 'all':
        return 'Все вакансии';
      case 'new':
        return 'Новые вакансии';
      case 'indor':
        return 'Внутреняя отделка';
      case 'outdor':
        return 'Уличные работы';
      case 'electric':
        return 'Электрика';
      case 'sanitary':
        return 'Сантехника';
      default:
        return 'Неизвестный тип';
    }
  };

  return (
    <>
      <h1 className='text-center text-3xl font-bold'>{translateType(type)}</h1>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
        {vacancies.map((vacancy: any, index: number) => (
          <VacancyCard key={index} vacancy={vacancy} />
        ))}
      </div>
    </>
  );
}
