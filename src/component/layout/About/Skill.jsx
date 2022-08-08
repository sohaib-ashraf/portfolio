

import React from 'react'
import './Skill.css'

const Skill = () => {

const frontendSKills = [
 {
    title: 'Javascript',
    percentage: '75%'
 },

 {
    title: 'JQuery',
    percentage: '90%'
 }, 
 {
    title: 'React.js',
    percentage: '55%'
 }, 

 {
    title: 'Bootstrap',
    percentage: '95%'
 },  

]


const backendSKills = [
    {
       title: 'Node.js',
       percentage: '75%'
    },
   
    {
       title: 'HTML',
       percentage: '99%'
    }, 
   
    {
       title: 'CSS',
       percentage: '95%'
    },  

    {
      title: 'Adobe Photoshop',
      percentage: '65%'
   }, 
   
   ]

  return (
    <div className="skill_wrapper d-flex gap-5">
        <div className="Frontend_skill w-50">
        {
            frontendSKills.map((item,index) => (
            <SkillItem key={index} title={item.title} percentage={item.percentage}/>
                ))
        }
        </div>

        <div className="backend_skill w-50">
        {
            backendSKills.map((item,index) => (
            <SkillItem key={index} title={item.title} percentage={item.percentage}/>
                ))
        }

        </div>
    </div>
  )
}



const SkillItem = ({title, percentage})=> {

return(
    <div className="skill_data mb-3">
    <div className="skill_title d-flex align-content-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
    </div>

    <div className="skill_bar">
        <span className="skill_bar_percentage" style={{width:`${percentage}`}}></span>
    </div>

</div>
)
}

export default Skill