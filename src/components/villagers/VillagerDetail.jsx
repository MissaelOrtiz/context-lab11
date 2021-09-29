/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useLoading, useSetLoading, useSetVillager, useVillager } from '../../hooks/VillagerProvider';
import { fetchVillager } from '../../services/animalCrossingApi';

const VillagerDetail = () => {
  const loading = useLoading();
  const setLoading = useSetLoading();
  const villager = useVillager();
  const setVillager = useSetVillager();
  const { id } = useParams();

  useEffect(() => {
    fetchVillager(id)
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, [id]);

  if(loading) return <h1>Now Loading...</h1>;
  return (
    <div role="div" aria-label="villager">
      <img src={villager.image} alt={villager.name} height={'400px'}/>
      <p>{villager.name}</p>
      <p>{villager.gender}</p>
      <p>{villager.quote}</p>
      <p>{villager.species}</p>
      <p>{villager.birthday}</p>
      <p>{villager.phrase}</p>
      <p>{villager.style}</p>
    </div>
  );
};

export default VillagerDetail;
