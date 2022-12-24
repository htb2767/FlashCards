import React from "react"
import Signup from "../components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "../components/Dashboard"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import ForgotPassword from "../components/ForgotPassword"
import "../index.css"
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
     
    >
      <div className="w-100"  >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute className="w-100" exact path="/" component={Dashboard} />
              
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
