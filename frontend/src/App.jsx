import './App.css'
import "../src/styles/global.scss";
import PatientsPage from './Pages/PatientsPage';
import useHealth from './context/useHealth';
import Spinner from './components/Spinner/Spinner';
import Advertise from './components/Advertise/Advertise';

function App() {
  const { loading } = useHealth();

  return (
    <>
      {
        !loading &&
        <PatientsPage />
      }
      {
        loading &&
        <Spinner />
      }

    </>
  )
}

export default App;
