import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
// import { Login } from "./pages/login/Login"
// import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
// import { Account } from "./pages/account/Account"
// import { Create } from "./components/create/Create"
import { Card } from "./components/blog/Card"
import { category } from "./assets/data/data"

import './App.css'

function App() {


  return (
    <>
     <Router>
        <Header />
      
        <Routes >

          <Route exact path='/' element={<Home />}  > 
          {category.map((item) => {
            return (
              <Route path={item.to}  element= {<Card category={item.category} />} />
            )
            
          }
          )}

          {/* <Route path="card"  element= {<Card/>} /> */}
          </Route>
          {/* <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Regsiter} /> */}
          <Route exact path='/details/:id' element={<DetailsPages />} />
          {/* <Route exact path='/account' component={Account} />
          <Route exact path='/create' component={Create} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
