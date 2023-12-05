import React from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Card = ({category}) => {

  const bolg_category=blog.filter((artical) => 
  
    artical.category.includes(category)
    
  
   
  );

  return (
    <>
      <section className='blog '>
        <div className='container grid3  flex flex-wrap  gap-10'>
          {bolg_category.map((item) => (
            <div className='box boxItems xl:!w-[30%] md:!w-[40%] bg-[#fff] h-[33rem] flex  flex-col  ' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details h-full flex  flex-col justify-between '>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>

                <p>{item.content[0].desc.slice(0, 150)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                 
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
