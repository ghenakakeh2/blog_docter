import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])
console.log(blogs)
  return (
    <>
     <Helmet>
        <title>{blogs == null ?  "": blogs.title}</title>
        <meta  name="description" content={blogs == null ?  "": blogs.content[0].desc}/>
      </Helmet>
   
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
            
           <div>
            {blogs.content.map((item) => {
              return(
                <div key={item.id} className="py-5 text-right px-3">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  {item.ul && (
                    <ul>
                      {item.ul.map((ele) => {
                        return(
                          <li>
                            <h4 className="font-bold text-[20px]  ">{ele.item_title}</h4>
                            <p className="text-[18px] ">{ele.item_content}</p>
                          </li>
                        )
                        
                      }
                      )}
                    </ul>
                  )}

                 
                  </div>
              )
              
            }
            )}
           </div>
             
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
