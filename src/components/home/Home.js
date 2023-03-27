import React from 'react'
import arrowIcon from "./arrowicon.png"
import vector12 from "./vector12.png"
import "./home.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

export class Home extends React.Component
 {
    constructor()
    {
        super();
        this.state = {
            data:undefined
        }
    }

    getCoursesList = async () =>
    {
        const response = await axios.get('/course/list', {
        auth: {
            username: 'bigvu',
            password: 'interview'
            }
        })

        const arr = response.data;
        return response.data;
    }

    p = (e) =>{
        const d = this.data;
        for(let i = 0; i < d.length; i++)
        {
            console.log(d[i])
        }
    }

    componentDidMount()
    {
        if(localStorage.getItem("courses") === null)
        {
            console.log("storing...")
            localStorage.setItem("courses", {})
        }
        this.getCoursesList().then((d)=>this.setState({data: d}))
    }

    countChapters = async(course) =>
    {
        const response = await axios.get(`/course/${course.id}`, {
        auth: {
            username: 'bigvu',
            password: 'interview'
            }
        })
        return response.data.chapters.length
    }




    renderCourseList = (course, color) =>
    {
        return (
            <div className='col'>
                <div className='col'>
                    <Link to={course.id} style={{all:"unset"}}>
                        <div className='card border-0' to={window.location.href} style={{cursor:"pointer"}}>
                            <h3>{course.headline}</h3>
                            <div className='card border-4'>
                                <div className='card-body'>
                                    <div className='col-4 outline rounded'
                                     style={{textAlign:"center",backgroundColor:"RGBA(37,54,88,0.6", color:"#ffffff", }}> 5 videos</div>
                                    <div className='course_desc' style={{fontSize:"2rem"}}>{course.description}</div>
                                    <div className='row'>
                                        <div className="col-9">
                                        <ul className='row mt-6'>
                                            {(()=>{
                                                const arr = []
                                                for(let i=0; i < course.summary.length; i++)
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
                    </Link>
                </div>
            </div>
        )
    }
    
  render()
  {
    console.log("data = " + this.state.data)
    if(this.state.data === undefined)
    {
        return <div>loading</div>
    }
    else return (
    <div className='home'>
        <div className='headline'> <h1>BIGVU 101 CRASH COURSE </h1></div>
        <div className='homeDesc'>
            <p>Zero editing experience to pro — your journey starts here.</p>
            <p>Watch step-by-step video lessons how to make videos with impact.</p>
        </div>

        <div className='row mt-4'>
                {(()=>{
                    const arr = [];
                    for(let i = 0; i < this.state.data.result.length; i++)
                    {
                        arr.push(this.renderCourseList(this.state.data.result[i]))
                    }
                    return arr;
                })()}
        </div>
    </div>
    )
  }
}
