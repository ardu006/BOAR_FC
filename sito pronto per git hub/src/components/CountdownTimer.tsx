import React, { useState, useEffect } from 'react';

export const CountdownTimer = ({ match }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isMatchStarted, setIsMatchStarted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const [day, month, year] = match.date.split('/');
      const [hours, minutes] = match.time.split(':');
      const matchDate = new Date(year, month - 1, day, hours, minutes);
      const now = new Date();
      
      const countdownStart = new Date(matchDate);
      countdownStart.setHours(countdownStart.getHours() - 66);
      
      if (now >= matchDate) {
        setIsMatchStarted(true);
        return null;
      }
      
      if (now < countdownStart) {
        return null;
      }
      
      const difference = matchDate - now;
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [match]);

  if (!timeLeft && !isMatchStarted) {
    return (
      <div className="bg-white bg-opacity-90 p-4 rounded-lg text-black max-w-sm mx-auto">
        <h3 className="text-xl font-bold mb-2">Prossima Partita</h3>
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            {match.day} {match.date} - {match.time}
          </p>
          <p className="text-lg sm:text-xl mb-2">
            <span className="font-bold">{match.home}</span>
            <span className="text-primary mx-2">vs</span>
            <span className="font-bold">{match.away}</span>
          </p>
          <p className="text-sm text-gray-600">{match.venue}</p>
        </div>
      </div>
    );
  }

  if (isMatchStarted) {
    return (
      <div className="bg-primary bg-opacity-90 text-white p-4 rounded-lg max-w-sm mx-auto">
        <h3 className="text-xl font-bold mb-2">La partita è iniziata!</h3>
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            {match.day} {match.date} - {match.time}
          </p>
          <p className="text-lg sm:text-xl mb-2">
            <span className="font-bold">{match.home}</span>
            <span className="mx-2">vs</span>
            <span className="font-bold">{match.away}</span>
          </p>
          <p className="text-sm">{match.venue}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white bg-opacity-90 p-4 rounded-lg text-black max-w-sm mx-auto">
      <h3 className="text-xl font-bold mb-4">Countdown Prossima Partita</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-4">
        <div>
          <span className="text-2xl font-bold text-primary">{timeLeft.days}</span>
          <p className="text-sm">Giorni</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-primary">{timeLeft.hours}</span>
          <p className="text-sm">Ore</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-primary">{timeLeft.minutes}</span>
          <p className="text-sm">Minuti</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-primary">{timeLeft.seconds}</span>
          <p className="text-sm">Secondi</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">
          {match.day} {match.date} - {match.time}
        </p>
        <p className="text-lg sm:text-xl mb-2">
          <span className="font-bold">{match.home}</span>
          <span className="text-primary mx-2">vs</span>
          <span className="font-bold">{match.away}</span>
        </p>
        <p className="text-sm text-gray-600">{match.venue}</p>
      </div>
    </div>
  );
};