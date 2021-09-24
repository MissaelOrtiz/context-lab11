/* eslint-disable max-len */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const VillagerContext = createContext();

const VillagerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  return (
    <VillagerContext.Provider value={{ loading, setLoading, villagers, setVillagers }}>
      {children}
    </VillagerContext.Provider>
  );
};

export const useSetVillagers = () => {
  const { setVillagers } = useContext(VillagerContext);
  return setVillagers;
};

export const useSetLoading = () => {
  const { setLoading } = useContext(VillagerContext);
  return setLoading;
};

export const useVillagers = () => {
  const { villagers } = useContext(VillagerContext);
  return villagers;
};

export const useLoading = () => {
  const { loading } = useContext(VillagerContext);
  return loading;
};

VillagerProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default VillagerProvider;
