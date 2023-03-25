import { formToJSON } from 'axios'
import React from 'react'
import arrowIcon from "./arrowicon.png"
import vector12 from "./vector12.png"
import "./home.css"

export class Home extends React.Component
 {

    data = {"result": [
                    {
                    "id": "12345bc19dadc0984940b243",
                    "headline": "Craft your message",
                    "description": "Use the teleprompter on Mobile or Web",
                    "summary": [
                        "Scripts",
                        "Teleprompter",
                        "Trim Words",
                        "Sequence Takes"
                    ]
                    },
                    {
                    "id": "12345c219dadc0984940b2a6",
                    "headline": "Style your Video",
                    "description": "Add subtitles, elegant titles, logo, music",
                    "summary": [
                        "Replace Green",
                        "Add Captions",
                        "Logo & Music",
                        "Biz Card (Intro/Outro)"
                    ]
                    },
                    {
                    "id": "12345cfbc5011c1135728cb6",
                    "headline": "Reach Your Audience",
                    "description": "Web pages with video and social media sharing",
                    "summary": [
                        "Post to Social Media",
                        "Personal Video Pages",
                        "Interactive Widgets",
                        "Live Streaming",
                        "Teams"
                    ]
                    }
                ]
                }
   

    p = (e) =>{
        const d = this.data.result;
        for(let i = 0; i < d.length; i++)
        {
            console.log(d[i])
        }
    }

    renderCourseList = (course, color) =>
    {
        return (
            <div className='col'>
                <div className='col'>
                    <div className='card border-0'>
                        <h3>{course.headline}</h3>
                        <div className='card border-4'>
                            <div className='card-body'>
                                <div className='course_desc'>{course.description}</div>
                                <div className='row'>
                                    <div className="col-9">
                                    <ul className='row mt-6'>
                                        {(()=>{
                                            const arr = []
                                            for(let i=0; i< course.summary.length; i++)
                                            {
                                                arr.push(<li className='col-6'><span>{course.summary[i]}</span></li>)
                                            }
                                            return arr
                                        })()}
                                    </ul>
                                </div>
                                <span className='col'><img src={arrowIcon} style={{width:"64px"}}></img></span>
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
        )
    }
    
  render()
  {
    return (
    <div className='home'>
        <div className='headline'> <h1>BIGVU 101 CRASH COURSE </h1></div>
        <div className='homeDesc'>
            <p>Zero editing experience to pro — your journey starts here.</p>
            <p>Watch step-by-step video lessons how to make videos with impact.</p>
        </div>

        <div className='row mt-4'>
                {(()=>{
                    const arr = [];
                    for(let i = 0; i < this.data.result.length; i++)
                    {
                        arr.push(this.renderCourseList(this.data.result[i]))
                    }
                    return arr;
                })()}
        </div>
    </div>
    )
  }
}
