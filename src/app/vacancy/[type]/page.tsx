'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import VacancyCard from '@/components/Vacancy/VacancyCard/VacancyCard';
import VacancyTabs from '@/components/Vacancy/VacancyTabs/VacancyTabs';

export default function VacancyList() {
  const [vacancies, setVacancies] = useState<any[]>([]);
  const params = useParams(); // Получаем параметры из URL
  const type = params?.type || 'all'; // Дефолтное значение "all"

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
      case 'recruiter':
        return 'Вакансии рекрутера';
      case 'manager':
        return 'Вакансии менеджера';
      case 'candidate':
        return 'Вакансии кандидата';
      default:
        return 'Неизвестный тип';
    }
  };

  return (
    <>
    <VacancyTabs/>
      <h1 className='text-center text-3xl font-bold'>{translateType(type)}</h1>
      <div className='flex flex-wrap justify-center gap-4'>
        {vacancies.map((vacancy: any, index: number) => (
          <VacancyCard key={index} vacancy={vacancy} />
        ))}
      </div>
    </>
  );
}
