import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
   
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
           <div>
            {blogs.content.map((item) => {
              return(
                <div className="py-5 text-right px-3">
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
