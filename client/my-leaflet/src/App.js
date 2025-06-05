import React, {useState} from 'react';
import List from './list.js';
import {CITY} from './mock/city.js';
import {POINTS} from './mock/points.js';
import Map from './map.js';

function App() {
  const [selectedPoint, setSelectedPoint] = useState({});

  const handleListItemHover = (listItemName) => {
    const currentPoint = POINTS.find((point) =>
      point.title === listItemName,
    );
    setSelectedPoint(currentPoint);
  };

  return (
    <React.Fragment>
      <header>
        <h1>Парки города {CITY.title}:</h1>
      </header>
      <main>
        <List points={POINTS} onListItemHover={handleListItemHover}/>
        <Map
          city={CITY}
          points={POINTS}
          selectedPoint={selectedPoint}
        />
      </main>
    </React.Fragment>
  );
}

export default App;