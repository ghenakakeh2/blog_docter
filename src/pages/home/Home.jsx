import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import Sidebar  from "../../components/sidebar/Sidebar"
import { Outlet } from "react-router-dom"
export const Home = () => {
  return (
    <div className="">
      {/*  <Slider />*/}
      <Category />
      
      <div className=" flex justify-between mt-10">
     ,<div>
     {/* <Card  /> */}
     <Outlet />
   
     </div>
     <Sidebar  />

      </div>
    </div>
  )
}
