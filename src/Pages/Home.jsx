import React, { useState } from 'react'
import Nav from '../components/Nav'
import Categories from './Category'
import Card from '../components/Card'
import { food_items } from '../food'

function Home() {
  let [Cate,setCate]=useState(food_items)

  function filter(category){
    if(category==="All"){
      setCate(food_items)
    }else{
      let newList=food_items.filter((item)=>(item.food_category===category))
      setCate(newList)
    }
  }
  return (
    <div className=' bg-slate-200 w-full min-h-screen'>
     <Nav/>
     <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
      {Categories.map((item)=>{
        return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
          {item.icon}
          {item.name}
        </div>
      })}
     </div>
     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
      {Cate.map((item)=>(
        <Card name={item.food_name} image={item.food_image}
        price={item.price} id={item.id} type={item.food_type}/>
      ))}
     </div>
    </div>
  )
}

export default Home