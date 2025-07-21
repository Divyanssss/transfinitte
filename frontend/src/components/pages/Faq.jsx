import React from 'react'
import { useState } from 'react'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleItem = (index) => {
        if (activeIndex == index) {
            return setActiveIndex(null);
        }
        setActiveIndex(index);
    };
  return (

    <div>
         <h1 className="font-mono font-extrabold text-white tracking-[0.25em] [text-shadow:_0_0_1px_white,_0_0_10px_white] text-center lg:text-left my-2" style={{ fontSize: '3rem' }}>
            FAQ
          </h1>
        <div className="accordion text-white p-4 rounded-lg "style={{ fontSize: '1rem' }}>
            {data.map((item, index) => (
                <div key={index} className="item border-b-2 border-gray-400 py-3.5">    
                    <div className="title flex justify-between items-center cursor-pointer " onClick={() => toggleItem(index)}>
                        {item.question}
                        <span className="icon ml-4">
                            {activeIndex == index ? '-' : '+'}
                        </span>
                    </div>
                    <div className="content bg-neutral-800 p-3 rounded-xl" style={{display: activeIndex === index ? 'block' : 'none'}}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}
const data = [
  {question: "What is Transfinitte?", answer:"It is a 42-hour weekend where student collaborate on innovative software and hardware projects."},
  {question: "Who can participate in Transfinitte?", answer: "Transfinitte is open to all students"},
    {question: "question", answer: "answer"}, {question: "question", answer: "answer"}, {question: "question", answer: "answer"},
]
export default Faq
