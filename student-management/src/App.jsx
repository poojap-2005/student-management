
import Dashboard from "./components/Navbar";
import Navbar from "./pages/Dashboard";
import AttendancePage from "./pages/Attendance";


function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard />
      <AttendancePage/>
      
    </div>
  );
}

export default App;