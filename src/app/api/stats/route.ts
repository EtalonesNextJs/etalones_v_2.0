import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import  Vacancies  from '@/models/Vacancies';

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    // Подсчет количества вакансий
    const vacancyCount = await Vacancies.find().countDocuments();

    // Получаем все вакансии с позициями в числовом формате
    const vacancies = await Vacancies.find({ published: true }).select('positions_available');

    // Суммирование количества свободных мест
    let availablePositions = 0;
    vacancies.forEach((vacancy: any) => {
      if (typeof vacancy.positions_available === 'string') {
        availablePositions += parseInt(vacancy.positions_available);
      } else if (typeof vacancy.positions_available === 'number') {
        availablePositions += vacancy.positions_available;
      }
    });

    // Отправка результата клиенту
    return NextResponse.json({ vacancyCount, availablePositions });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Ошибка сервера" }, { status: 500 });
  }
}
