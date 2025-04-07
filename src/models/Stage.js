import { Schema, model, models } from "mongoose";
import {Vacancies} from './Vacancies';
import {News} from './News';
console.log("Параметры пришедшие в модель",News);
console.log("Параметры пришедшие в модель",Vacancies);
const StageSchema = new Schema({
  name: String,
  vacancy:[{
    type: Schema.Types.ObjectId,
    ref: 'Vacancies', 
  }],
  news:[{
    type: Schema.Types.ObjectId,
    ref: 'News', 
  }],
  
}, { timestamps: true });

const Stage = models?.Stage || model("Stage", StageSchema);
export default Stage;
