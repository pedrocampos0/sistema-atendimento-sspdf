import { createContext, useContext } from 'react';

const AlertContext = createContext(() => {
    throw new Error('useAlert must be used within an AlertProvider');
});

export const useAlert = () => useContext(AlertContext);

export default AlertContext;