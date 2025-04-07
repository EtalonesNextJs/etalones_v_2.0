import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Candidate from '@/models/Candidate';
import Stage from '@/models/Stage';
import EventLog from '@/models/EventLog';


const STAGE_NEW = process.env.NEXT_PUBLIC_CANDIDATES_STAGE_NEW;

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    console.log("BODY", body);

    const { name, phone, profession, documents, manager, vacancy } = body;

    await connectDB();

    // Проверяем, существует ли кандидат с таким номером телефона
    const existingCandidate = await Candidate.findOne({ phone: body.phone });
    if (existingCandidate) {
      return new NextResponse(
        JSON.stringify({
          message: "Кандидат с таким номером телефона уже существует",
        }),
        {
          status: 400,
        }
      );
    }

    // Преобразуем данные под структуру, соответствующую схеме MongoDB
    const newCandidateData = {
      source: 'сайт', 
      name: name,
      phone: phone,
      manager: manager,
      vacancy: vacancy,
      professions: [
        {
          name: profession.name, 
          experience: profession.expirience, 
        },
      ],
      documents: documents.map((doc: any) => ({
        docType: doc.name,  
        dateOfIssue: "",    
        dateExp: "",       
        numberDoc: "",      
      })),
     
    };

    const newCandidate = new Candidate(newCandidateData);
    await newCandidate.save();

    const stageNewId = STAGE_NEW;
    if (stageNewId) {
      await Stage.findByIdAndUpdate(
        stageNewId,
        { $push: { candidates:{ $each: [newCandidate._id], $position: 0 }} },
        { new: true }
      );
    }
    const eventLog = new EventLog({
      eventType: 'Добавлен кандидат',
      relatedId: newCandidate._id,
      description: `Добавлен новый кандидат с сайта Etalones.com: ${name}`,
    });

    await eventLog.save();
    return new NextResponse(
      JSON.stringify({ message: "Candidate is created", candidate: newCandidate }),
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error:', error);
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating user",
        error: error.message || 'Unknown error',
      }),
      {
        status: 500,
      }
    );
  }
};
