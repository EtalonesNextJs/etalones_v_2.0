const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;
const baseUrl = `https://api.telegram.org/bot${botToken}`;

export const sendMessage = async (message: string): Promise<void> => {
    const url: string = `${baseUrl}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            parse_mode: "html",
            text: message
        })
    });
    
    console.log('response', response);
}

export const sendPhoto = async (photo: Buffer, caption: string): Promise<void> => {
    const url: string = `${baseUrl}/sendPhoto`;
    
    const formData = new FormData();
    formData.append('chat_id', chatId);
    
    // Преобразуем Buffer в Blob
    const blob = new Blob([photo], { type: 'image/jpeg' }); // Укажите нужный MIME-тип
    formData.append('photo', blob, 'avatar.jpg'); // Имя файла
    formData.append('caption', caption);
    
    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    });
    
    console.log('response', response);
};
