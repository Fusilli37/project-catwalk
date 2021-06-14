/* eslint-disable prettier/prettier */
import React, { createContext } from "react";

export const initialState = {
  styles: [],
  name: "",
  price: 0,
};

export const OverviewContext = createContext(initialState);
