import logo from './logo.svg';
import './App.css';
import Notifications from "./Components/Notifications"
import img1 from "./img/Frame 4.png"
import img2 from "./img/Vector (1).png"
import img3 from "./img/Vector (2).png"
import img4 from "./img/Vector (3).png"


function App() {
  return (
    <div className='flex'>
      <Notifications
      header="Success"
      color="#00CC99"
      img={img1}
      />
      <Notifications
      header="Error"
      color="#EB5757"
      img={img2}
      />
      <Notifications
      header="Warning"
      color="#F2C94C"
      img={img3}
      />
      <Notifications
      header="Info"
      color="#5458F7"
      img={img4}
      />
    </div>
  )
}

export default App;
