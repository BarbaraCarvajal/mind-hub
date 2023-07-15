import { createContext } from 'react';

const StateContext = createContext();

export default StateContext;


/*
import React, { createContext } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children, events }) => {
  return (
    <EventContext.Provider value={events}>
      {children}
    </EventContext.Provider>
  );
};
*/