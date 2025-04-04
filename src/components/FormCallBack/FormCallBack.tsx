'use client'
import { useState, useEffect } from "react";
import {Button} from "@/components/ui/button";
// import { sendMessage } from "@/app/api/telegram/telegram";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

export default function FormCallBack() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        time: '',
        currentPage: '', // добавляем поле для текущей страницы
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const router = useRouter();

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            currentPage: window.location.href // получаем текущий URL при монтировании компонента
        }));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     const { name, phone, time, currentPage } = formData;

    //     if (!name.trim()) {
    //         setErrors({ ...errors, name: 'Введите имя' });
    //         return;
    //     }
    //     if (!phone.trim()) {
    //         setErrors({ ...errors, phone: 'Введите телефон' });
    //         return;
    //     }
    //     if (!time.trim()) {
    //         setErrors({ ...errors, time: 'Выберите время звонка' });
    //         return;
    //     }

    //     try {
    //         // Формируем сообщение для Telegram
    //         const message = `
    //             Имя: ${name}
    //             Телефон: ${phone}
    //             Время звонка: ${time}
    //             Страница: ${currentPage} 
    //         `;
    //         setIsLoading(true);
    //         await sendMessage(message);

    //         // Формируем данные для сохранения в базу данных
    //         const body = {
    //             name,
    //             phone,
    //             time,
    //             source: 'сайт'
    //         };

    //         const response = await fetch('/api/candidates', { 
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(body)
    //         });

    //         const result = await response.json();
    //         if (response.ok) {
    //             console.log('Candidate created:', result);
    //             alert('Запрос на звонок отправлен и сохранен в базу данных!');
    //             router.refresh();
    //             router.push("/dashboard/candidates");
    //             setFormData({ name: '', phone: '', time: '', currentPage: '' });
    //         } else {
    //             setErrors({ ...errors, name: result.message || 'Ошибка при сохранении в базу данных' });
    //         }
    //     } catch (error) {
    //         setErrors({ ...errors, name: 'Ошибка при отправке сообщения или сохранении в базу данных' });
    //         console.error('Error:', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };
// Обработчик формы
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const { name, phone, time, currentPage } = formData;
  
    if (!name.trim()) {
      setErrors({ ...errors, name: 'Введите имя' });
      return;
    }
    if (!phone.trim()) {
      setErrors({ ...errors, phone: 'Введите телефон' });
      return;
    }
    if (!time.trim()) {
      setErrors({ ...errors, time: 'Выберите время звонка' });
      return;
    }
  
    try {
      // Формируем сообщение для Telegram
      const message = `
        Имя: ${name}
        Телефон: ${phone}
        Время звонка: ${time}
        Страница: ${currentPage} 
      `;
      setIsLoading(true);
      // await sendMessage(message);
  
      // Формируем данные для сохранения в базу данных
      const body = {
        name,
        phone,
        time,
        source: 'сайт'
      };
  
      const response = await fetch('/api/candidates', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log('Candidate created:', result);
        alert('Запрос на звонок отправлен и сохранен в базу данных!');
        router.refresh();
        router.push("/");
        setFormData({ name: '', phone: '', time: '', currentPage: '' });
      } else {
        setErrors({ ...errors, name: result.message || 'Ошибка при сохранении в базу данных' });
      }
    } catch (error) {
      setErrors({ ...errors, name: 'Ошибка при отправке сообщения или сохранении в базу данных' });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
    return (
        <div className=" px-10 py-5 bg-secondary">
            <div className="w-full">
                <h3 className="text-2xl">Оставьте свой номер телефона и мы сразу свяжемся с Вами.</h3>
                <p>Назначьте время разговора с нами и мы поможем Вам выбрать вакансию и ответим на Ваши вопросы.</p>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4 w-full items-center">
                    <Input 
                        className="input input-bordered" 
                        placeholder="Имя" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange} 
                    />
                    
                    <Input 
                        className="input input-bordered" 
                        placeholder="Номер телефона" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange} 
                    />
                    
                    <Select  
                        name="time"
                        // value={formData.time}
                    >
                       <SelectTrigger className="w-full">
        <SelectValue placeholder="Время звонка" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Время</SelectLabel>
          <SelectItem value="8:00-10:00">8:00-10:00</SelectItem>
          <SelectItem value="10:00-12:00">10:00-12:00</SelectItem>
          <SelectItem value="12:00-14:00">12:00-14:00</SelectItem>
          <SelectItem value="14:00-16:00">14:00-16:00</SelectItem>
          <SelectItem value="16:00-18:00">16:00-18:00</SelectItem>
          <SelectItem value="После работы">После работы</SelectItem>
        </SelectGroup>
      </SelectContent>
                    </Select>
                    {errors.time && <span className="text-red-500">{errors.time}</span>}
                    
                    <Button  type="submit">
                    Заказать звонок
                    </Button>
                </form>
            </div>
        </div>
    );
}
