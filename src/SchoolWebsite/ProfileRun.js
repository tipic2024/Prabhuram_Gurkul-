
import React from 'react';
import ProfileDetails from './Profile';
 
const profileData = [
  {
    id: 1,
    myInfo: "Namaskar! I am Dr. Shubham S. Shete is the Founder, Director, and Chief Advisor of Prabhuram Gurukul.I am a practicing Ayurvedic and Holistic Wellness Consultant also specializes in nurturing the body, mind, and soul. With a deep passion for child psychology, Indian culture, spirituality, Ayurveda, yoga, and meditation,I strives to harmonize the spiritual and material aspects of life. Through Prabhuram Gurukul, Dr. Shete envisions instilling Lord Rama's virtues in children, empowering them to become global assets, and working towards establishing a Ramrajya— a world of righteousness and harmony.",
    name: 'Dr. Shubham Shete',
    title: 'Founder and Chief Advisor of Prabhuram Gurukul ',
    // additionalInfo: 'PhD in Ayurveda',
    education: 'Master\'s degree in Data Science',
    institution: 'Institute of Data',
    additionalEducation: null,
    researchField: 'Machine Learning',
    authorField: 'Data Analytics',
    imagePath: './Shubham.jpeg'
  },

  {
    id: 2,
    name: 'Mr.Sandip D. Shete',
    title: 'Founder and Managing Director of Prabhuram Gurukul.',
    myInfo:'Namaskaram!!I am Mr. Sandip D. Shete; Founder and Managing Director of Prabhuram Gurukul. I have special interest in Child psychology.I have been extensively working in the field of education since 15 years providing high quality learning experience for students by my extra-ordinary leadership skills and proper execution of strategic goals for the educational development of students.',
    additionalInfo: 'MS in Ayureda',
    education: 'Bachelor\'s degree in Computer Science',
    institution: 'University of Tech',
    additionalEducation: 'Diploma in Software Development',
    researchField: 'Artificial Intelligence',
    authorField: 'Software Engineering',
    imagePath: './Sandip D. Shete4.jpg'
  },
  {
    id: 3,
    name: 'Mrs.Sunita S. Shete',
    title: 'Founder and Principal Prabhuram Gurukul, Nashik ',
    myInfo:'Coming Soon',
    // additionalInfo: 'MS in Ayureda',
    education: 'Bachelor\'s degree in Computer Science',
    institution: 'University of Tech',
    additionalEducation: 'Diploma in Software Development',
    researchField: 'Artificial Intelligence',
    authorField: 'Software Engineering',
    imagePath: './Sunita S. Shete.jpg'
  }
 
];
 
function ProfileRun() {
  return (
    <div>
      {profileData.map((profile) => (
        <ProfileDetails key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
 
export default ProfileRun;
 