import React, { createContext } from 'react';

const AmpContext = createContext(false);

export default AmpContext;

export const AmpProvider = ({ children, isAmp }: any) => <AmpContext.Provider value={isAmp}>{children}</AmpContext.Provider>;
