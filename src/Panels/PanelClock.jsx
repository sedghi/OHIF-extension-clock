import React, { useEffect, useState } from 'react';

export default function PanelClock({ servicesManager, commandsManager }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-auto text-white invisible-scrollbar">
      <div className="p-4">{time.toLocaleTimeString()}</div>
    </div>
  );
}
