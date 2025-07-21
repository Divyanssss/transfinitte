import {createBrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import Register from './components/auth/Register.jsx';
import Wrapper from './Wrapper.jsx';

export const router = createBrowserRouter([
  {
    path:'/',      
    element:<App />,
    
  },
  {
    path:'/signin',
    element:<SignIn />,
  },
    {
      path:'/signup',
      element:<SignUp />
    },
    {    
      path:'/register',
      element:(
        <Wrapper>
          <Register />
        </Wrapper>
      )
    },
    

])
