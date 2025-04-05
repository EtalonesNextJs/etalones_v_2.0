'use client';
import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

export default function VacancyList({ type, limit }: { type: string; limit?: number }) {
  const [news, setNews] = useState<any[]>([]);
    console.log("news", news);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/api/news/all?type=${type}${limit ? `&limit=${limit}` : ""}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch vacancy');
        }

        const data: any = await response.json();
        setNews(data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [type, limit]); 

  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="w-full">
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
        {news.map((news: any, index: number) => (
          <div key={index}>
              <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
