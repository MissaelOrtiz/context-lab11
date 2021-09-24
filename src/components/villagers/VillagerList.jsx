import React, { useContext } from 'react';
import Villager from './Villager';
import VillagerProvider from '../../hooks/VillagerProvider';

const VillagerList = () => {
  const { loading, villagers } = useContext(VillagerProvider);
  if(loading) return <h1>Now Loading...</h1>;
  return (
    <ul role="list" aria-label="villagers">
      {villagers.map((villager) => (
        <li key={villager.id}>
          <Villager 
            villagerName={villager.name} 
            villagerId={villager.id} 
            villagerImage={villager.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default VillagerList;
