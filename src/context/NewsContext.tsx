import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NewsType {
  _id: string;
  image: { name: string; data: { $binary: { base64: string; subType: string } } };
  contentType: string;
  source: string;
  title: string;
  category: string;
  description: string;
  content: { title: string; content: string; _id: string }[];
  createdAt: string;
  updatedAt: string;
}

interface NewsState {
  [key: string]: NewsType[] | undefined;
}

const NewsContext = createContext<{
  news: NewsState;
  loadNews: (type: string, newsList: NewsType[]) => void;
}>({
  news: {},
  loadNews: () => {},
});

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<NewsState>({});

  const loadNews = (type: string, newsList: NewsType[]) => {
    setNews((prev) => ({
      ...prev,
      [type]: newsList,
    }));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const cachedNews = localStorage.getItem('news');
        if (cachedNews) {
          const parsed = JSON.parse(cachedNews);
          if (parsed && typeof parsed === 'object') {
            setNews(parsed);
          }
        }
      } catch (err) {
        console.error('Ошибка чтения localStorage для новостей:', err);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (Object.keys(news).length > 0) {
          localStorage.setItem('news', JSON.stringify(news));
        }
      } catch (err) {
        console.error('Ошибка записи localStorage для новостей:', err);
      }
    }
  }, [news]);

  return (
    <NewsContext.Provider value={{ news, loadNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);

// import React, { createContext, ReactNode } from 'react';

// // Тип для новости
// interface NewsType {
//   _id: string;
//   image: { name: string; data: { $binary: { base64: string; subType: string } } };
//   contentType: string;
//   source: string;
//   title: string;
//   category: string;
//   description: string;
//   content: { title: string; content: string; _id: string }[];
//   createdAt: string;
//   updatedAt: string;
// }

// // Тип состояния контекста для новостей
// interface NewsState {
//   [key: string]: NewsType[] | undefined;
// }

// // Контекст для новостей
// export const NewsContext = createContext<{
//   news: NewsState;
//   loadNews: (type: string, newsList: NewsType[]) => void;
// }>({
//   news: {},
//   loadNews: () => {},
// });

// export class NewsProvider extends React.Component<{ children: ReactNode }> {
//   state = {
//     news: {} as NewsState,
//   };

//   // Метод загрузки новостей
//   loadNews = (type: string, newsList: NewsType[]) => {
//     this.setState((prevState: { news: NewsState }) => ({
//       news: {
//         ...prevState.news,
//         [type]: newsList,
//       },
//     }));
//   };

//   componentDidMount() {
//     // Загружаем новости из localStorage при монтировании компонента
//     const cachedNews = localStorage.getItem('news');
//     if (cachedNews) {
//       this.setState({ news: JSON.parse(cachedNews) });
//     }
//   }

//   componentDidUpdate() {
//     // Сохраняем новости в localStorage при обновлении
//     if (Object.keys(this.state.news).length > 0) {
//       localStorage.setItem('news', JSON.stringify(this.state.news));
//     }
//   }

//   render() {
//     return (
//       <NewsContext.Provider value={{ news: this.state.news, loadNews: this.loadNews }}>
//         {this.props.children}
//       </NewsContext.Provider>
//     );
//   }
// }

// export const NewsConsumer = NewsContext.Consumer;
