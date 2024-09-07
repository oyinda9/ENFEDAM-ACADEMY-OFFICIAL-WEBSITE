import Navbar from './components/navbar/Navbar';
import Topbar from './components/Topbar';
import Home from './pages/home';

 const App = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Home/>
    </div>
  )
}
export default App;