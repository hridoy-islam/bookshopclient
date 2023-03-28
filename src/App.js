import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import auth from './firebase/firebase.config'
import { getUser, toggleLoading } from './features/auth/authSlice';
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email))
      }
      else {
        dispatch(toggleLoading())
      }
    })
  }, [dispatch]);
  return (
    <div>
     <RouterProvider router={router} />
     <Toaster />
    </div>
  );
}

export default App;
