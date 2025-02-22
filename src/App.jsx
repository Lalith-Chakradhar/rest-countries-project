import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import CountryDetailsPage from './pages/CountryDetailsPage';

import {CustomProvider} from "./CustomContext";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/country/:id' element={<CountryDetailsPage/>}/>
      </Route>
    )
  );
  
  return (
    <CustomProvider>
      <RouterProvider router={router}/>
    </CustomProvider>);
};

export default App;
