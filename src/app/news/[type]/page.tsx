'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import NewsCard from '@/components/News/NewsCard/NewsCard';

export default function VacancyList() {
  const [news, setNews] = useState<any[]>([]);
  const params = useParams(); 
  const type = params?.type || 'all'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/news/all?type=${type}`);
        if (!response.ok) throw new Error('Не удалось загрузить вакансии');

        const data = await response.json();
        setNews(data);
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
      <h1 className='text-center text-3xl font-bold'>{translateType(type)}</h1>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
        {news.map((news: any, index: number) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </>
  );
}
