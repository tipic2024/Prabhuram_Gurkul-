
import React from 'react';
import ProfileDetails from './Profile';
 
const profileData = [
  {
    id: 1,
    myInfo: "Namskaram!! Welcome to our Prabhuram Gurukul where tradition and modern education blend seamlessly. I am Dr. Shubham S. Shete; Founder, Director and Chief Advisor of Prabhuram Gurukul. I am Practicing Ayurvedic Consultant and Holistic Wellness Consultant comprosing of Body, Mind and Soul. Multifaceted personality having special interest in Child psychology, Indian Culture, Spirituality, Ayurveda, Yoga and meditation. I always keep on making endeavours to achieve golden mean of spirituality and materialism. As the name Prabhuram itself implies Practical execution of vision of learning qualities from lord Rama and applying them in the life of children and transforming children making them asset not only for the nation but also for the world and setting Ramrajya in the world",
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
    myInfo:"Namaskaram!!I am Mr. Sandip D. Shete; Founder and Managing Director of Prabhuram Gurukul.I have been extensively working in the field of education since 15 years providing high quality learning experience for students by my extra-ordinary leadership skills and proper execution of strategic goals for the educational development of students.At our Prabhuram Gurukul, our mission is to provide an enriching environment where academic excellence, personal growth, and ethical values are seamlessly integrated.I am committed to creating innovative learning experiences, supporting our educators, and ensuring that every student has the resources and guidance they need to succeed.",
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
    myInfo:"Namaskaram!! I am Mrs. Sunita S. Shete; Founder and Principal of Prabhuram Gurukul With 16 years of extensive experience in early childhood education and a deep passion for fostering young minds and I am honored to lead a Prabhuram Gurukul overseeing the integration of traditional values with contemporary learning methods, ensuring a balanced and holistic development in our students. and work closely with teachers to uphold the Gurukul’s ethos, fostering an environment where spiritual, moral, and academic growth is encouraged which plays a pivotal role in shaping our Gurukul environment. Additionally, I am dedicated to building strong relationships with families, supporting them in their child's early learning journey.",
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
 