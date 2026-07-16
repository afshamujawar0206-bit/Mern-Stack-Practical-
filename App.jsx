//pract3-a
function App()
{
  return (
    <div>
      <h1>Welcome to Mern Stack Development</h1>
      <h2>Afsha T025 </h2>
    </div>
  );
}
export default App

//3b
function App()
{
  const emp ="Afsha";
  const dep = "IT";
  const sal = 80000;
  return(
    <div>
      <h1>Employee Details</h1>
      <p>Name:{emp}</p>
      <p>Department:{dep}</p>
      <p>Salary:₹{sal}</p>
    </div>
  );
}

export default App

//3b2
function App(){
  const studentName = "Afsha Mujawar";
  const totalClasses = 60;
  const attendenceClasses = 54;
  const attendance = (attendenceClasses/totalClasses) * 100;

  return (
    <div>
      <h1>Attendance Dashboard</h1>
      <hr/>
      <p>Name: {studentName}</p>
      <p>TotalClasses: {totalClasses}</p>
      <p>Classes Attendence: {attendenceClasses}</p>
      <p>Attendance: {attendance.toFixed(2)}%</p>
      <h3>
        Status : { attendance >= 75? "Eligible for Exam" : "NOT Eligible"}
      </h3>

    </div>
  );
}
export default App

//3c
function App(){
  const maths = 85;
  const sci = 90;
  function calculate(marks1,marks2) {return marks1+marks2;}
    return (
    <div>
      <h1>Student Marks</h1>
      <hr/>
      <p>Mathematics Marks: {maths}</p>
      <p>Science Marks: {sci}</p>
      <hr/>
      <h3>
        Total Marks : { calculate (maths,sci)}
      </h3>
      <h5>Afsha T025 </h5>
    </div>
  );
}
export default App

//3d
import"./App.css";
function App(){
    return (
    <div className="container">
      <h1>Student DashBoad</h1>
      <hr/>
      <p>Name: Afsha Mujawar</p>
      <p>Roll No: 25</p>
      <p>Cource: B.Sc.IT </p>
      <p>Semester: V </p>
      <button>View Result</button>
      <h5>Afsha T025 </h5>
    </div>
  );
}
export default App;

//Application
import Header from"./components/Header";
import Student from"./components/Student";
import Attendence from"./components/Attendence";
import Result from"./components/Result";
import Footer from"./components/Footer";

function App(){
  return(
     <div>
      <Header />
      <Student />
      -------------------------------
      <Attendence />
      -------------------------------
      <Result />
      <Footer />
    </div>
  );
}
export default App;

