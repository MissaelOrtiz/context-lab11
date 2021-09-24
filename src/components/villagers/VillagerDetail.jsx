import React, { useContext } from 'react';
import VillagerProvider from '../../hooks/VillagerProvider';

const VillagerDetail = () => {
  const { loading, villager } = useContext(VillagerProvider);

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
