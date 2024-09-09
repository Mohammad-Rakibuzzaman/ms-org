import React from 'react';

interface Folder {
  name: string;
  link: string;
}

const LandingPage: React.FC = () => {
  const folders: Folder[] = [
    { name: 'Biology Class', link: 'https://mega.nz/folder/EeFWmQiQ#6HsbhO7d151Mo7mW3cVsdQ' },
    { name: 'Book resources', link: 'https://mega.nz/folder/Fz9WxI6K#DrmeElAyPoO_siJLuDXqSA' },
    { name: 'Desktop', link: 'https://mega.nz/folder/Fz9WxI6K#DrmeElAyPoO_siJLuDXqSA' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Folders</h1>
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