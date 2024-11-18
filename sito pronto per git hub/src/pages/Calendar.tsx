import React from 'react';

const matches = [
  {
    date: '18/11/2024',
    time: '22:00',
    home: 'SHITTADELLA',
    away: 'BOAR FC',
    venue: 'LEDAKOS NERVI',
    day: 'Lunedì'
  },
  {
    date: '02/12/2024',
    time: '21:00',
    home: 'BOAR FC',
    away: 'BAR LUNA FC',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '09/12/2024',
    time: '21:00',
    home: 'REAL ECUADOR CHIAVARI',
    away: 'BOAR FC',
    venue: 'CHIAVARI CAMPO DEI FRATI',
    day: 'Lunedì'
  },
  {
    date: '16/12/2024',
    time: '21:00',
    home: 'BOAR FC',
    away: 'PIRATI FC',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '13/01/2025',
    time: '21:45',
    home: 'GLI ORANGE',
    away: 'BOAR FC',
    venue: 'TRE PINI BORGORATTI',
    day: 'Lunedì'
  },
  {
    date: '20/01/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'HOT BOYS CHIAVARI',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '27/01/2025',
    time: '21:00',
    home: 'LA PINTA DINAMO ALFI',
    away: 'BOAR FC',
    venue: 'SAN DESIDERIO C',
    day: 'Lunedì'
  },
  {
    date: '10/02/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'ATLETICO ZENA',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '17/02/2025',
    time: '21:00',
    home: 'ASD PREGIO',
    away: 'BOAR FC',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '24/02/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'SHITTADELLA',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '10/03/2025',
    time: '20:45',
    home: 'BAR LUNA FC',
    away: 'BOAR FC',
    venue: 'TRE PINI BORGORATTI',
    day: 'Lunedì'
  },
  {
    date: '17/03/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'REAL ECUADOR CHIAVARI',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '24/03/2025',
    time: '21:45',
    home: 'PIRATI FC',
    away: 'BOAR FC',
    venue: 'TRE PINI BORGORATTI',
    day: 'Lunedì'
  },
  {
    date: '07/04/2025',
    time: '21:00',
    home: 'BOAR FC',
    away: 'GLI ORANGE',
    venue: 'RECCO',
    day: 'Lunedì'
  },
  {
    date: '14/04/2025',
    time: '21:00',
    home: 'HOT BOYS CHIAVARI',
    away: 'BOAR FC',
    venue: 'CHIAVARI CAMPO DEI FRATI',
    day: 'Lunedì'
  }
];

const Calendar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Calendario Partite</h1>
      
      <div className="space-y-6">
        {matches.map((match, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-primary">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-600">{match.day}</p>
                <p className="text-lg font-semibold text-primary">{match.date}</p>
                <p className="text-primary-dark">{match.time}</p>
              </div>
              
              <div className="flex-grow text-center">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                  <span className="text-xl font-semibold">{match.home}</span>
                  <span className="text-primary text-2xl">vs</span>
                  <span className="text-xl font-semibold">{match.away}</span>
                </div>
              </div>
              
              <div className="text-center md:text-right mt-4 md:mt-0">
                <p className="text-gray-600">Sede</p>
                <p className="font-medium text-primary-dark">{match.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;