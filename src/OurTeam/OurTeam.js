import React from 'react';
import './team.css'; // Используем отдельный CSS файл для стилизации "О нас"
import ava1 from './me.jpg'; // Импортируем изображения
import ava2 from './nurai.jpg'; // Импортируем изображения

// Функциональный компонент для отображения информации о члене команды
const TeamMember = ({ name, role, avatar, instagram }) => {
  return (
    <div className="about-team-member">
      <img src={avatar} alt={`${name}'s avatar`} className="about-avatar" />
      <h2 className="about-h2">{name}</h2>
      <p className="about-p">{role}</p>
      <a href={instagram} target="_blank" rel="noopener noreferrer" className="about-instagram-link">Instagram</a>
    </div>
  );
}

// Главный компонент "О нас"
const About = () => {
  // Список членов команды
  const teamMembers = [
    {
      name: 'Madina Zinolla',
      role: 'Creator of this site',
      avatar: ava1,
      instagram: '',
    },
    {
      name: 'Nurai Abdikaim',
      role: 'Creator of this site',
      avatar: ava2,
      instagram: '',
    }
  ];

  return (
    <div className="about-container">
      <h1>Our Team</h1>
      <div className="about-team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
            instagram={member.instagram}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
