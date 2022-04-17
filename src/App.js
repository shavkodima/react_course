import './App.css';
import User from './component/User';
import Userlist from './component/UserList';
import Composableuser from './component/ComposableUser';
function App() {
  return (
    <div className="App">
      <User name='Dima'/>
      <Userlist />
      <>-------------Children----------------</>
      <Composableuser />
    </div>
  );
}

export default App;
