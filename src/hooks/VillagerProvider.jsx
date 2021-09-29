/* eslint-disable max-len */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const VillagerContext = createContext();

const VillagerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);
  const [villager, setVillager] = useState({});

  return (
    <VillagerContext.Provider value={{ loading, setLoading, villagers, setVillagers, villager, setVillager }}>
      {children}
    </VillagerContext.Provider>
  );
};

export const useSetVillagers = () => {
  const { setVillagers } = useContext(VillagerContext);
  return setVillagers;
};

export const useSetVillager = () => {
  const { setVillager } = useContext(VillagerContext);
  return setVillager;
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

export const useVillager = () => {
  const { villager } = useContext(VillagerContext);
  return villager;
};

VillagerProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default VillagerProvider;
