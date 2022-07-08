import { Route, Routes,Navigate } from "react-router-dom"
import {LoginPage,RegisterPage} from '../pages';


const AuthRoutes = () => {
  return (
   <Routes>
     <Route path="login" element = {<LoginPage/>}/>
     <Route path="register" element = {<RegisterPage/>}/>
   
     {/* User will be redirect to the login page if user is not in login or register */}
     <Route path="/*" element ={<Navigate to="/auth/login"/>}/>
   </Routes>
  )
}

export default AuthRoutes