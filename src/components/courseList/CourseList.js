import { Button } from 'bootstrap'
import React from 'react'
import "./CourseList.css"

export class CourseList extends React.Component
{
    secondsToMinutes(sec)
    {
        const minutes = Math.floor(sec / 60)
        const seconds = Math.floor(sec - minutes * 60)
        return minutes + ":" + seconds
    }

    createFinishSym = (chapter) =>
    {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00ff00" className="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
        )

    }

    createPlaySym = () =>
    {
        return(
            <span className='playSym'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16   16">
                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    
                    </svg>
                </span>

        )
    }


    chapterListRow = (chapter) =>
    {
        return (
            <div className='chapterContent' style={{verticalAlign:"middle"}}>
                {this.createPlaySym()}
                <span className='chapterTitle'>{chapter.title} </span>
                <span className='chapterDuration' >{this.secondsToMinutes(chapter.asset.resource.duration)}</span>
            </div>
        )
    }



    course = this.props.parentState.data




    switchChapter = (chapter)=>
    {
        console.log("switchChapter")
        this.props.switchChapter(chapter);
    }

    render()
    {
        return (
            <div className='row'>
                <div className="courseHeadline"><h1>{this.course.headline}</h1></div>
                <div className='col'>
                    <div className='card'>
                        {(() => {
                            const arr = [];
                            const chapters = this.course.chapters;
                            for (let i = 0; i < chapters.length; i++) {
                                arr.push(
                                    <div className='border chapter' onClick={()=>this.switchChapter(chapters[i])}>
                                         {this.chapterListRow(chapters[i])}
                                    </div>
                                );
                            }
                            return arr;
                        })()}
                    </div>
                </div>
            </div>
        )
    }
  
}
