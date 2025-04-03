import { DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { DialogHeader, DialogFooter } from "../ui/dialog";
import { Input } from "../ui/input";
import { MultiSelectExample } from "../Multiselect/Ex";

export default function DialogAnketaContent() {
  return (
    <><DialogHeader>
      <DialogTitle>Отправить заявку</DialogTitle>
      <DialogDescription>
        Укажите пожалуйста свой номер телефона и имя для отправки заявки.
      </DialogDescription>
    </DialogHeader><div className="grid gap-4 py-4">
        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="name" className="text-right">
            Имя: <span className="font-light text-sm text-gray-600">*Ваше имя</span>
          </Label>
          <Input id="name"  className="col-span-3" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <Label htmlFor="phone" className="text-left">
            Номер телефона: <span className="font-light text-sm text-left text-gray-600">*Номер указаный в меседжерах Viber, WhatsApp, Telegram.</span>
          </Label>
          <Input id="phone"  className="col-span-3" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <Label htmlFor="username" className="text-left">
            Опыт работы: <span className="font-light text-sm text-left text-gray-600">Опыт работы по профессии.</span>
          </Label>
          <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Меньше года">Меньше года</SelectItem>
    <SelectItem value="1 год">1 год</SelectItem>
    <SelectItem value="2 года">2 года</SelectItem>
    <SelectItem value="3 года">3 года</SelectItem>
    <SelectItem value="4 года">4 года</SelectItem>
    <SelectItem value="5 лет">5 лет</SelectItem>
    <SelectItem value="Более 5 лет">Более 5 лет</SelectItem>
  </SelectContent>
</Select>

        </div>
        <div className="flex flex-col items-start gap-1">
          <Label htmlFor="username" className="text-left">
            Документы: <span className="font-light text-sm text-left text-gray-600">*Документы разрешающие работу в Европе.</span>
          </Label>
          <Select multiple>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Выберите документы" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Паспорт">Паспорт</SelectItem>
    <SelectItem value="Виза">Виза</SelectItem>
    <SelectItem value="Песель">Песель</SelectItem>
    <SelectItem value="Карта побыта">Карта побыта</SelectItem>
  </SelectContent>
</Select>

        </div>
      </div><DialogFooter>
        <Button className="bg-green-800" type="submit">Отправить</Button>
      </DialogFooter></>
  )
  }