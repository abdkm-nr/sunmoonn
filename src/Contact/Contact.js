// import React, { useState } from 'react';
// import './contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     emailaddress: '',
//     subject: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);

//     try {
//       // Отправляем данные на сервер
//       const response = await fetch('/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       // Обрабатываем ответ
//       if (response.ok) {
//         console.log('Form data saved successfully.');
//         // Очищаем состояние формы
//         setFormData({
//           name: '',
//           emailaddress: '',
//           subject: ''
//         });
//       } else {
//         console.error('Failed to save form data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error saving form data:', error);
//     }
//   };

//   return (
//     <div className="contact">
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="What is your name?"
//           className="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="emailaddress"
//           placeholder="What is your email?"
//           className="email"
//           type="email"
//           value={formData.emailaddress}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           rows="4"
//           cols="50"
//           name="subject"
//           placeholder="Please enter your message"
//           className="message"
//           value={formData.subject}
//           onChange={handleChange}
//           required
//         />
//         <input name="submit" className="btn" type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };

// export default Contact;
