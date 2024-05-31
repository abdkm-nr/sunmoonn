import React from 'react';
import { Link } from 'react-router-dom';
import  '../css/aapp.css';


export const profiles = [
  { id: 1, name: 'HIRO HAMADA', age: 14 , city: 'San Francisco', bio: 'Hiro Hamada is the main protagonist of the City of Heroes franchise and the founder and leader of the Heroic Six.', avatar: 'https://i.pinimg.com/564x/a4/31/db/a431db69c88a0d1744c80fa47d839a44.jpg' },
  { id: 2, name: 'Miles Morales', age: 16, city: 'Brooklyn', bio: 'My name is Miles Morales, and I was bitten by a radioactive spider. For a while I was the only Spider-Man, and you know the rest.', avatar: 'https://i.pinimg.com/564x/39/2f/7e/392f7e79d31628ae6a30fae719985bb3.jpg' },
  { id: 3, name: 'Sukuna', age: 1000, city: 'Shibuya', bio: 'Comparing yourself to others leads to weakness and prevents growth.', avatar: 'https://i.pinimg.com/736x/c6/b6/38/c6b63838c69930901d292084b80deb87.jpg' },
  { id: 4, name: 'Satoru Gojo', age: 34, city: 'Shibuya', bio: 'Im surprised you thought you could beat me with your pathetic excuse for a brain', avatar: 'https://i.pinimg.com/564x/d9/85/e3/d985e32d28da57996998b07a43908caa.jpg' },
  { id: 5, name: 'Sandman', age: 1000, city: 'San Francisco', bio: 'This is a kind creature that calms naughty children and brings good dreams, and a negative one is an evil, hostile creature that brings nightmares to naughty children.', avatar: 'https://i.pinimg.com/564x/47/9a/b2/479ab20b6839221cbe2f240ffa11ca51.jpg' },
];

function Anime() {
  return (
    <div>
      <h1>Profiles</h1>
      <div className='card'>
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <img src={profile.avatar} alt={profile.name} className="avatar" />
            <div className='info'>
              <h2>{profile.name}</h2>
              <p>Age: {profile.age}</p>
              <p>City: {profile.city}</p>
              <Link className='button' to={`/profile/${profile.id}`}>View Profile</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anime;
