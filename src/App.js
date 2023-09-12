import './App.css';
import {BrowserRouter as Router,Routes,Route, redirect} from 'react-router-dom'
import OpenPage from './pages/OpenPage';
import Register from './pages/Register';
import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WorkoutLog from './pages/WorkoutLog';
import {exercisesLab} from './assets/exerciseLibrary.js'
import UserSettings from './pages/UserSettings';
import Inbox from './pages/Inbox';
import ExerciseEncyclopedia from './pages/ExerciseEncyclopedia';
import { chestExercises } from './assets/chestExercises.js'
import { legsExercises } from './assets/legsExercises';
import { backExercises } from './assets/backExercises'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SearchPage from './pages/SearchPage';


function App() {
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [gender,setGender] = useState('');
  const [birthday,setBirthday] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [allUsers,setAllUsers] = useState([]);
  const [currentUser,setCurrentUser] = useState([]);
  const [error,setError] = useState([]);
  const [sortedWorkoutDates,setSortedWorkoutDates] = useState([]);
  const [favExercise,setFavExercise] = useState([]);
  const [foundEx,setFoundEx] = useState([]);
  const [allExercises,setAllExercises] = useState([...backExercises, ...chestExercises, ...legsExercises])
  const [foundSearchEx,setFoundSearchEx] = useState([]);


  const notify = () => {
    toast.info('Exercise added to favorites!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const notify2 = () => {
    toast.info('New Workout Plan has been created!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const notify3 = () => {
    toast.info('The workout has been deleted', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  
  

  


  return (
    <div className="App">
      <Router>
        {currentUser.length === 0 ? <h1></h1> : <Navbar currentUser={currentUser} allUsers={allUsers} setCurrentUser={setCurrentUser}/>}
        <Routes>
          <Route path='/' element={<OpenPage setAllUsers={setAllUsers} setEmail={setEmail} setPassword={setPassword} allUsers={allUsers} email={email} password={password}  setCurrentUser={setCurrentUser}/>} />
          <Route path='/Register' element={<Register setFullName={setFullName} fullName={fullName} setEmail={setEmail} email={email}
          gender={gender} setGender={setGender} setBirthday={setBirthday} birthday={birthday} setPassword={setPassword} 
          password={password} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword} setAllUsers={setAllUsers} 
          allUsers={allUsers} setError={setError} error={error}/>} />
          <Route path='/Home' element={<Home currentUser={currentUser} sortedWorkoutDates={sortedWorkoutDates} setSortedWorkoutDates={setSortedWorkoutDates}/>} />
          <Route path='/WorkoutLog' element={<WorkoutLog currentUser={currentUser} allUsers={allUsers} exercisesLab={exercisesLab}/>} />
          <Route path='/UserSettings' element={<UserSettings password={password} confirmPassword={confirmPassword} allUsers={allUsers} 
          setCurrentUser={setCurrentUser} fullName={fullName} currentUser={currentUser} setConfirmPassword={setConfirmPassword} setPassword={setPassword}
           setBirthday={setBirthday} setGender={setGender} setFullName={setFullName} setEmail={setEmail}/>} />
           <Route path='/Inbox' element={<Inbox currentUser={currentUser}/>} />
           <Route path='/ExerciseEncyclopedia' element={<ExerciseEncyclopedia setFoundSearchEx={setFoundSearchEx} allExercises={allExercises} setCurrentUser={setCurrentUser} foundEx={foundEx} setFoundEx={setFoundEx} notify3={notify3} notify2={notify2} notify={notify} favExercise={favExercise}
            setFavExercise={setFavExercise} backExercises={backExercises} legsExercises={legsExercises} chestExercises={chestExercises} currentUser={currentUser}/>} />
            {
              allExercises.map((val,index) => {
                return (
                  <Route path={`/SearchPage/${val.exerciseName}`} element={<SearchPage foundSearchEx={foundSearchEx} allExercises={allExercises}/>} />
                )
              })
            }
        </Routes>
      </Router>
      <ToastContainer  style={{color:"red"}}/>
    </div>
  );
}

export default App;
