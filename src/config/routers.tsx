import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Admin from '../screen/admin';
import Institute from '../screen/institute';

export default function Approute() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='institute/*' element={<Institute/>}/>
        <Route path='admin/*' element={<Admin/>}/>  {/*nested route bananey k liya (/*) use krein */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}
