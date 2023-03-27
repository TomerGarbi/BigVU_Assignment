import React from 'react'
import {VideoPlayer} from '../videoPlayer/VideoPlayer';
import {CourseList} from '../courseList/CourseList';
import axios from 'axios';
import "./Course.css"

export class Course extends React.Component 
{


    constructor()
    {
        super();
        this.state = {
        data: undefined,
        url: "",
        currentChapterId:"", 
        }
    }

    getCurrentCourse = async ()=>
    {
        const response = await axios.get(`/course${window.location.pathname}`, {
        auth: {
            username: 'bigvu',
            password: 'interview'
            }
        })
        const arr = response.data;
        return response.data;
    }
    
    componentDidMount()
    {
        this.getCurrentCourse().then((d)=>{this.setState({data: d})})
    }


    setNewChapter = (chapter) =>
    {
        console.log("set new chapter")
        this.setState(
            {
                currentChapterId: chapter.Id,
                url: chapter.asset.resource.stream.url
            }
        )
        console.log("url: " + this.state.url)

    }

    listSwitchChapter = (chapter) =>
    {
        console.log("listSwitchChapter")
        this.setNewChapter(chapter)
    }

    render()
        {
            const state = this.state
            console.log("render...")
            if(this.state.data === undefined)
            {
                return <div>not found</div>
            }
            return (
                <div className='pageWrapper'>
                    <div className='row'>
                        <div className='col-7'>
                            <VideoPlayer  parentState={state} />
                        </div>
                        <div className="col"> 
                            <CourseList parentState={state} switchChapter={this.listSwitchChapter}/>
                        </div>
                    </div>
                </div>
        )
        }
}
