import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const ServiceContext = createContext(null);



const ServiceProvider = ({children}) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      const res = await axios.get("/data/services.json");
      setServices(res.data);
    };
    fetchServices();
  }, []);
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

ServiceProvider.propTypes = {
  children: PropTypes.node,
};

export default ServiceProvider;