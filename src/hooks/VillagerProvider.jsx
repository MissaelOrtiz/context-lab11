import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchApi } from '../services/animalCrossingApi';

export const VillagerContext = createContext();

const VillagerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    fetchApi()
      .then((villagers) => setVillagers(villagers))
      .then(() => setLoading(false));
  }, []);

  return (
    <VillagerProvider.Provider value={{ loading, villagers }}>
      {children}
    </VillagerProvider.Provider>
  );
};

VillagerProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default VillagerProvider;
