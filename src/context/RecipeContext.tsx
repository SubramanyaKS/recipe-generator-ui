import { createContext} from 'react';
import type { RecipeContextType } from '../utils/types';

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);
