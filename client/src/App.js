import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/userAction';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './routes/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Goodjob from './components/Goodjob';
import Results from './components/Results';
import Questions from './components/Questions';
import Logout from './components/Logout';
import { getAllQuestions } from './redux/actions/questionAction';

function App() {

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllQuestions());
  }, [dispatch]);

  // always scroll to top on route/path change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname])

  return (
    <div className='content-center'>
        <ToastContainer />
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } />
          <Route path="/scores" element={
            <PrivateRoute>
              <Goodjob />
            </PrivateRoute>
          } />
          <Route path="/results" element={
            <PrivateRoute>
              <Results />
            </PrivateRoute>
          } />
          <Route path="/questions" element={
            <PrivateRoute>
              <Questions />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>

    </div>

  );
}

export default App;
