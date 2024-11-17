import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users2, Trophy } from 'lucide-react';
import { MatchResult } from '../components/MatchResult';
import { CountdownTimer } from '../components/CountdownTimer';

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

const pastMatches = [
  {
    date: '21/10/2024',
    time: '21:00',
    home: 'BOAR FC',
    away: 'LA PINTA DINAMO ALFI',
    venue: 'RECCO',
    result: '2 - 5',
    day: 'Lunedì',
  },
  {
    date: '04/11/2024',
    time: '22:00',
    home: 'ATLETICO ZENA',
    away: 'BOAR FC',
    venue: 'LEDAKOS NERVI',
    result: '11 - 3',
    day: 'Lunedì',
  },
  {
    date: '11/11/2024',
    time: '21:00',
    home: 'BOAR FC',
    away: 'ASD PREGIO',
    venue: 'RECCO',
    result: '2 - 17',
    day: 'Lunedì',
  },
];

const Home = () => {
  // Find the next match
  const now = new Date();
  const nextMatch = matches.find(match => {
    const [day, month, year] = match.date.split('/');
    const [hours, minutes] = match.time.split(':');
    const matchDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes));
    return matchDate > now;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-primary">BOAR</span>
              <span className="text-black">FC</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Serie C2 / Girone C Liguria
            </p>
            {nextMatch && (
              <div className="max-w-md mx-auto">
                <CountdownTimer match={nextMatch} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/calendar"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calendario</h3>
            <p className="text-gray-600">
              Visualizza tutte le partite della stagione
            </p>
          </Link>

          <Link
            to="/team"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <Users2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Squadra</h3>
            <p className="text-gray-600">Conosci i nostri giocatori</p>
          </Link>

          <Link
            to="/news"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <Trophy className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">News</h3>
            <p className="text-gray-600">Ultime notizie e aggiornamenti</p>
          </Link>
        </div>
      </div>

      {/* Past Matches Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Risultati Precedenti
          </h2>
          <div className="space-y-6">
            {pastMatches.map((match, index) => (
              <MatchResult key={index} {...match} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;