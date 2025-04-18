import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Тип для вакансии
interface Vacancy {
  _id: string;
  title: string;
  description: string;
}

// Тип состояния контекста для вакансий
interface VacanciesState {
  [key: string]: Vacancy[] | undefined;
}

// Контекст для вакансий
const VacancyContext = createContext<{
  vacancies: VacanciesState;
  loadVacancies: (type: string, vacanciesList: Vacancy[]) => void;
}>({
  vacancies: {},
  loadVacancies: () => {},
});

export const VacancyProvider = ({ children }: { children: ReactNode }) => {
  const [vacancies, setVacancies] = useState<VacanciesState>({});

  const loadVacancies = (type: string, vacanciesList: Vacancy[]) => {
    setVacancies((prev) => ({
      ...prev,
      [type]: vacanciesList,
    }));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const cachedVacancies = localStorage.getItem('vacancies');
        if (cachedVacancies) {
          const parsed = JSON.parse(cachedVacancies);
          if (parsed && typeof parsed === 'object') {
            setVacancies(parsed);
          }
        }
      } catch (error) {
        console.error('Ошибка чтения localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (Object.keys(vacancies).length > 0) {
          localStorage.setItem('vacancies', JSON.stringify(vacancies));
        }
      } catch (error) {
        console.error('Ошибка записи в localStorage:', error);
      }
    }
  }, [vacancies]);

  return (
    <VacancyContext.Provider value={{ vacancies, loadVacancies }}>
      {children}
    </VacancyContext.Provider>
  );
};

export const useVacancies = () => useContext(VacancyContext);

// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// // Тип для вакансии
// interface Vacancy {
//   _id: string;
//   title: string;
//   description: string;
// }

// // Тип состояния контекста для вакансий
// interface VacanciesState {
//   [key: string]: Vacancy[] | undefined;
// }

// // Контекст для вакансий
// const VacancyContext = createContext<{
//   vacancies: VacanciesState;
//   loadVacancies: (type: string, vacanciesList: Vacancy[]) => void;
// }>({
//   vacancies: {},
//   loadVacancies: () => {},
// });

// export const VacancyProvider = ({ children }: { children: ReactNode }) => {
//   const [vacancies, setVacancies] = useState<VacanciesState>({});

//   const loadVacancies = (type: string, vacanciesList: Vacancy[]) => {
//     setVacancies((prev) => ({
//       ...prev,
//       [type]: vacanciesList,
//     }));
//   };

//   useEffect(() => {
//     // Загружаем вакансии из кэша при монтировании компонента
//     const cachedVacancies = localStorage.getItem('vacancies');
//     if (cachedVacancies) {
//       setVacancies(JSON.parse(cachedVacancies));
//     }
//   }, []);

//   useEffect(() => {
//     // Сохраняем вакансии в localStorage каждый раз, когда они обновляются
//     if (Object.keys(vacancies).length > 0) {
//       localStorage.setItem('vacancies', JSON.stringify(vacancies));
//     }
//   }, [vacancies]);

//   return (
//     <VacancyContext.Provider value={{ vacancies, loadVacancies }}>
//       {children}
//     </VacancyContext.Provider>
//   );
// };

// export const useVacancies = () => useContext(VacancyContext);
