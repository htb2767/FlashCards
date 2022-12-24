import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,Link,useHistory
} from "react-router-dom";
import { Button } from "react-bootstrap"
import NewTopicForm from "./NewTopicForm";
import NewQuizForm from "./NewQuizForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quizzes from "../features/quizzes/Quizzes";
import Quiz from "../features/quizzes/Quiz"
import { useAuth } from "../contexts/AuthContext"
import ROUTES from "../app/route"
export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
     <>
     
     <Router>
      <nav  >
        <ul>
          <li>
            <NavLink to={ROUTES.topicsRoute()} activeClassName="active">
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.quizzesRoute()} activeClassName="active">
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newQuizRoute()} activeClassName="active">
              New Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/topics">
          <TopicsRoutes />
        </Route>
        <Route path="/quizzes">
          <QuizRoutes />
        </Route>
      </Switch>
    </Router>
    <div className=" align-items-center  text-center mt-2" >
        <Button  onClick={handleLogout}>
          Log Out
        </Button>
      </div>
     
      
      
      
    </>
  )
}
function TopicsRoutes() {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewTopicForm />
        </Route>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${match.path}`}>
          <Topics />
        </Route>
      </Switch>
    </>
  );
}

function QuizRoutes() {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewQuizForm />
        </Route>
        <Route path={`${match.path}/:quizId`}>
          <Quiz />
        </Route>
        <Route path={`${match.path}`}>
          <Quizzes />
        </Route>
      </Switch>
    </>
  );
}

