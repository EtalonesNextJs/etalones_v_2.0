'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Home: React.FC = () => {
  const [vacancyCount, setVacancyCount] = useState<number | null>(null);
  const [totalPositionsAvailable, setTotalPositionsAvailable] = useState<number | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setVacancyCount(data.vacancyCount);
        setTotalPositionsAvailable(data.availablePositions);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div
      className="min-h-[500px] flex justify-center items-center"
      style={{ backgroundImage: 'url(/main/primary_sh.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-10 text-5xl text-white font-bold">Ищете работу в Европе?</h1>
          <p className="mb-5 text-xl text-white text-shadow-xl">
            На данный момент открыто <strong>
              {vacancyCount !== null ? <CountUp end={vacancyCount} duration={4} /> : '...'}
            </strong> вакансий,<br />
            и <strong>
              {totalPositionsAvailable !== null ? <CountUp end={totalPositionsAvailable} duration={4} /> : '...'}
            </strong> свободных мест
          </p>

          <Link href="/vacancy/all" className="btn bg-gradient-red text-white">
           <Button>Смотреть предложения</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
