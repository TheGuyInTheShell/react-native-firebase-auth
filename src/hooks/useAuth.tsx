import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export function useAuth() {
  const auth = getAuth();
  
  const [user, setUser] = React.useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  }
}