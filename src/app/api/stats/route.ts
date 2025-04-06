import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Vacancies from '@/models/Vacancies';

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    // Подсчет количества вакансий
    const vacancyCount = await Vacancies.find().countDocuments();

    // Получаем все вакансии с полем 'place'
    const vacancies = await Vacancies.find().select('place');

    // Суммирование количества свободных мест
    let place = 0;
    
    // Логируем выборку вакансий
    console.log('Выборка вакансий:', vacancies);

    vacancies.forEach((vacancy: any) => {
      const vacancyPlace = Number(vacancy.place);
      
      // Логируем значение места для каждой вакансии
      console.log(`Место для вакансии ${vacancy._id}:`, vacancyPlace);
      
      // Если значение корректное (не NaN), добавляем его к общей сумме
      if (!isNaN(vacancyPlace)) {
        place += vacancyPlace;
      }
    });

    // Логируем итоговую сумму свободных мест
    console.log('Итоговое количество свободных мест:', place);

    // Отправка результата клиенту
    return NextResponse.json({ vacancyCount, place });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Ошибка сервера" }, { status: 500 });
  }
}
