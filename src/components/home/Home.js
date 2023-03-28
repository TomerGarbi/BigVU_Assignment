import React from 'react'
import arrowIcon from "./arrowIcon.png"
import finishIcon from "./finishIcon.png"
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
            coursesDesc:undefined, //holds the course list data
        }
    }
    courseDetails = {}; // holds the courses data

    colorsGradients = [["#28B3F7", "#506AFF"],["#00EA3B", "#00DA96"],["#F79F28", "#FF5350"]]; // colors for titles
    coursesStatus = {} 

    getCoursesList = async () =>
    {
        const response = await axios.get('/course/list', {
        auth: {
            username: 'bigvu',
            password: 'interview'
            }
        })

        return response.data;
    }


    componentDidMount()
    {
        this.getCoursesList().then((courses)=>{
            this.coursesStatus = JSON.parse(window.localStorage.getItem("coursesStatus"));
            if(this.coursesStatus === null)
            {
                this.coursesStatus = {}
                for(let i = 0; i < courses.result.length; i++)
                {
                    this.coursesStatus[courses.result[i].id] = false;
                }
                window.localStorage.setItem("coursesStatus", JSON.stringify(this.coursesStatus));
            }
            
            this.setState({coursesDesc: courses});
        });
    }

    getCourse = async(course) =>
    {
        const response = await axios.get(`/course/${course.id}`, {
        auth: {
            username: 'bigvu',
            password: 'interview'
            }
        })
        return response
    }

    getCourseLength(course) //TODO: fix this
    {
        const data = this.getCourse(course).then(response => response.data);
        return '?'
    }



    //renders the data of courses.
    //for each course there is a card that holds th data.
    //some of the stylings are not working
    renderCourseList = (course, colorGrad) =>
    {
        const colorStyle = {
                        background: `linear-gradient(to right, ${colorGrad[0]}, ${colorGrad[1]})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    };

        return (
            <div className='col-lg-4 col-md-12'>
                <div className='col'>
                    <Link to={course.id} style={{all:"unset"}}>
                        <div className='card border-0' to={window.location.href} style={{cursor:"pointer"}}>
                            <h3 style={colorStyle}>{course.headline}</h3>
                            <div className='card border-4'>
                                <div className='card-body'>
                                    <div className='col-4 outline rounded'
                                     style={{textAlign:"center",backgroundColor:"RGBA(37,54,88,0.6", color:"#ffffff", }}>
                                        {this.getCourseLength(course)} videos</div>
                                    <div className='course_desc' style={{fontSize:"2rem"}}>{course.description}</div>
                                    <div className='row'>
                                        <div className="col-9">
                                            <ul className='row mt-6'>
                                                {(()=>{
                                                    const arr = []
                                                    for(let i=0; i < course.summary.length; i++)
                                                    {
                                                        arr.push(<li className='col-6' style={{ '--bullet-color': 'red' }}><span>{course.summary[i]}</span></li>)
                                                    }
                                                    return arr
                                                })()}
                                            </ul>
                                    </div>
                                    <span className='col'><img src={this.coursesStatus[course.id]? finishIcon:arrowIcon} style={{width:"64px"}}></img></span>
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
    if(this.state.coursesDesc === undefined)
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
                    for(let i = 0; i < this.state.coursesDesc.result.length; i++)
                    {
                        arr.push(this.renderCourseList(this.state.coursesDesc.result[i], this.colorsGradients[i%3]))
                    }
                    return arr;
                })()}
        </div>
    </div>
    )
  }
}
