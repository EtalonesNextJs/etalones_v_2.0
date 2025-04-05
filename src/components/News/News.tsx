'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

const features = [
    {
      title: "Identify Opportunities",
      description: "Find untapped areas to explore effortlessly.",
    },
    {
      title: "Build Authority",
      description: "Craft content that resonates and inspires trust.",
    },
    {
      title: "Instant Insights",
      description: "Get actionable insights instantly at a glance.",
    },
  ];
  


  const News = () => {
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          setLoading(true);
          const response = await fetch("/api/news");
          const data = await response.json();
          setNews(data.news);
        } catch (error) {
          console.error("Error fetching news:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchNews();
    }, []);
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="w-full">
          <h2 className="text-2xl text-primary sm:text-3xl font-bold tracking-tight text-center">
            Новости
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
            {news.map((news: any, index: number) => (
              <div key={news.title} className="flex flex-col text-start">

                <Image src={`data:${news.image.contentType};base64,${Buffer.from(news.image.data).toString('base64')}`}
                 width={200} height={200} alt="news" className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl" />

                <span className="text-2xl font-semibold tracking-tight">
                  {news.title}
                </span>
                <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                  {news.description.slice(0, 35)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default News;
  