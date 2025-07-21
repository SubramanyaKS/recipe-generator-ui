// src/context/AuthContext.jsx
import { useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config'; // Import your auth instance
import { AuthContext } from '../context/AuthContext';



export const AuthProvider:React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<import('firebase/auth').User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This observer listens for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup the subscription on unmount
    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      // setCurrentUser(null); // onAuthStateChanged will handle this automatically
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const value = {
    currentUser,
    loading,
    logout,
    // You might add login/signup functions here or keep them in components
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} 
    </AuthContext.Provider>
  );
};

