import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import LoggedInRoutes from "./components/LoggedInRoutes"
import Profile from "./pages/Profile"
import CreateQuiz from "./pages/CreateQuiz"
import DashboardLayout from "./components/DashboardLayout"
import CreateQuestions from "./pages/CreateQuestions"
import AdminQuizes from "./pages/AdminQuizes"
import { useSelector } from "react-redux"

function App() {

  const { edit, quiz } = useSelector(state => state.quiz)
  console.log("edit : ", edit);
  console.log("quiz: ", quiz)

  return (
    <div className=" bg-slate-950 text-white">
      <div className="max-w-[1200px] px-3 mx-auto min-h-screen ">
        <Routes>
          <Route path="/" element={<LoggedInRoutes><Home /></LoggedInRoutes>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard">
            <Route index element={<LoggedInRoutes><DashboardLayout><Profile /></DashboardLayout></LoggedInRoutes>} />
            <Route path="create-quiz" element={<LoggedInRoutes><DashboardLayout><CreateQuiz /></DashboardLayout ></LoggedInRoutes>} />
            <Route path="create-quiz/:id" element={<LoggedInRoutes><DashboardLayout><CreateQuestions /></DashboardLayout ></LoggedInRoutes>} />
            <Route path="quizes" element={<LoggedInRoutes><DashboardLayout><AdminQuizes /></DashboardLayout></LoggedInRoutes>} />
            <Route path="edit-quiz/:id" element={<LoggedInRoutes><DashboardLayout><CreateQuiz /></DashboardLayout></LoggedInRoutes>} />
            {/* <Route path="results" element={<LoggedInRoutes><DashboardLayout><Results /></DashboardLayout></LoggedInRoutes>} /> */}
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
