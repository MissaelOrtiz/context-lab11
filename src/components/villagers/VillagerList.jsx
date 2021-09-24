/* eslint-disable max-len */
import React, {  useEffect } from 'react';
import Villager from './Villager';
import { fetchApi } from '../../services/animalCrossingApi';
import { useLoading, useSetLoading, useSetVillagers, useVillagers } from '../../hooks/VillagerProvider';

const VillagerList = () => {
  const loading = useLoading();
  const setLoading = useSetLoading();
  const villagers = useVillagers();
  const setVillagers = useSetVillagers();

  useEffect(() => {
    fetchApi()
      .then((villagersArr) => setVillagers(villagersArr))
      .then(() => setLoading(false));
  }, []);

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
