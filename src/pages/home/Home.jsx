import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import Sidebar  from "../../components/sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async';
export const Home = () => {
  return (
    <div className="">
        <HelmetProvider>
  
      <Helmet>
        <title>مقالات طبية </title>
        <meta  name="description" content="هذا موقع متخصص بمقالات طبية تخص البشرى والجمال والأمراض الجلدية لطبيبة جلدية متخصصة "/>
      </Helmet>
   

  </HelmetProvider>
   
      <Category />
      
      <div className=" flex lg:flex-row  lg:items-start flex-wrap  items-center justify-center  mt-10   flex-col-reverse w-full overflow-hidden ">
     <div className="  xl:w-[80%] lg:w-[80%] w-[100%] ">

     <Outlet />
   
     </div>
     <div className="xl:w-[20%] lg:w-[17%] w-full  mx-auto ">
     <Sidebar  />
     </div>
     

      </div>
    </div>
  )
}
