// const express = require('express');
// const fs = require('fs-extra');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000; // Порт, на котором будет запущен сервер

// // Middleware для парсинга данных из тела запроса
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Обработчик POST запроса для сохранения данных в файл
// app.post('/submit-form', async (req, res) => {
//   const formData = req.body;

//   try {
//     // Читаем данные из файла (если он существует)
//     let existingData = {};
//     if (await fs.pathExists('./formData.json')) {
//       existingData = await fs.readJson('./formData.json');
//     }

//     // Добавляем новые данные в существующие
//     const newData = { ...existingData, ...formData };

//     // Записываем данные в файл
//     await fs.writeJson('./formData.json', newData);

//     // Отправляем ответ клиенту
//     res.status(200).json({ message: 'Form data saved successfully.' });
//   } catch (error) {
//     console.error('Error saving form data:', error);
//     res.status(500).json({ error: 'An error occurred while saving form data.' });
//   }
// });

// // Запускаем сервер
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
