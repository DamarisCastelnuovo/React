import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
 
export default function App() {
  return (
    <div>
  <Navbar/>
  <ItemListContainer greeting={"JOYERIA CD"}/> 
     </div>
  );
}


