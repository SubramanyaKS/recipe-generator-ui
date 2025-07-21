// src/context/AuthContext.jsx
import { createContext, } from 'react';
import type { AuthContextType } from '../utils/types';

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  logout: async () => {},
});

