//inialize react 
import React from 'react';

interface Folder {
  name: string;
  link: string;
}

const LandingPage: React.FC = () => {
  const folders: Folder[] = [
    { name: 'Biology Class', link: 'https://mega.nz/folder/EeFWmQiQ#6HsbhO7d151Mo7mW3cVsdQ' },
    { name: 'Book resources', link: 'https://mega.nz/folder/Fz9WxI6K#DrmeElAyPoO_siJLuDXqSA' },
    { name: 'MME by Rajesh Gubba wum', link: 'https://mega.nz/folder/MrNUXQyJ#DAULhtWD359aq1XrFM8CIA'},
    { name: 'Kenhub', link: 'https://mega.nz/folder/o61FGCKB#0RulfnqOid2sYzrLn_H6Ug'},
    { name: 'Rajeev Ranjan Patel pharmacology -Rajeev Ranjan Patel pharmacology', link: 'https://mega.nz/folder/hatGkarT#75ZedW3XNZ4Q2BAoNb4vdg' },
    { name: 'sam turco wmed', link: 'https://mega.nz/folder/Q7lFFbBK#Zdrr4EBYnLqW-Ms3IGETBg' },
    { name: 'Pixorize 2024 - 4 G4ZA', link: 'https://mega.nz/folder/fIQUTYyQ#KcDkQ2-rPIbWM_6yH4G04w' },
    { name: 'Dr. Dillip MMS wum', link: 'https://mega.nz/folder/szNHxASb#dfulyev6V_qEQrXmPYkhCA' },
    { name: 'Dr. Najeeb by AfraTafreeh.com', link: 'https://mega.nz/folder/IisgESJR#4HMr_sa4F8ndLISq-P8Vxg' },
    { name: 'DAMS', link: 'https://mega.nz/folder/0SVXyJpQ#74KJCCpfRL9L_MXp65aZSQ' },
    { name: 'dams dvt 2024', link: 'https://mega.nz/folder/qrZHwShQ#o5YGmLWqMB0SwFuknVunmw' },
    { name: 'YPO 2024', link: 'https://mega.nz/folder/MqVTDSaR#02P_ccp5oNaheXngWoKMnQ' },
    { name: 'OnlineMedEd Basic Sciences Videos ATF', link: 'https://mega.nz/folder/IKFkxRjI#glaoPBbXjnTsumIHXpf8uA' },
    { name: 'Sqadias', link: 'https://mega.nz/folder/l7s1jKKY#mlKo1Jt5yZb3M362ElHqpg' },
    { name: 'Sketchy 2023 for G4ZA', link: 'https://mega.nz/folder/eVglUQiB#w0y7gyioWoWYRTfR1ggugg' },
    { name: 'Quest Medicine wum', link: 'https://mega.nz/folder/AO9j2ICR#f-NoHuyn2bOIpp0X1hdneQ' },
    { name: 'Physeo Anatomy', link: 'https://mega.nz/folder/01w0AJKJ#SNm2216tx3KZLy4Ak0mYiw' },
    { name: 'Stupiremed', link: 'https://mega.nz/folder/4jc2FAgD#4FueUrd65-D5C5zpEZSMVw' },
    { name: 'Lecturio', link: 'https://mega.nz/folder/EeFWmQiQ#6HsbhO7d151Mo7mW3cVsdQ' },
    { name: 'Osmosis wum', link: 'https://mega.nz/folder/Fz9WxI6K#DrmeElAyPoO_siJLuDXqSA' }

  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">My Folders</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {folders.map((folder, index) => (
            <a  key={index}
              href={folder.link}
              target="_blank"
              className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{folder.name}</h2>
                <p className="text-gray-600">Click to open folder</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;