import React from 'react'
import axios from 'axios';
import "./Course.css"
import ReactPlayer from 'react-player';


export class Course extends React.Component 
{
    constructor()
    {
        super();
        this.state = {
        data: undefined, //hold the course data
        url: "", //current url
        currentChapterId:"",  //current chapter id
        }
        this.userData = undefined // data to be stored in user's local storage

    }

    getCurrentCourse = async ()=>
    {
        const response = await axios.get(`/course${window.location.pathname}`, {
        auth: {
            username: 'bigvu',
            password: 'interview'
            }
        })
        return response.data;
    }


    setNewChapter = (newChapter) =>
    {
        this.userData.currentChapterId = newChapter.id;
        this.userData.currentChapterUrl = newChapter.asset.resource.stream.url;
        this.setState(
            {
                currentChapterId: newChapter.id,
                url: newChapter.asset.resource.stream.url
            }
        )
        window.localStorage.setItem(this.state.data.id, JSON.stringify(this.userData))
        
    }


    switchChapter = (newChapter) =>
    {
       this.setUserData();
       this.setNewChapter(newChapter);
    }

    setUserData = ()=>
    {
        const currentId = this.userData.currentChapterId;
        const currentTime = Math.floor(this.player.getCurrentTime());
        this.userData.chaptersData[currentId].lastViewTime = currentTime;
        if(! this.userData.chaptersData[currentId].finished && currentTime >= 10)
            {
                this.userData.chaptersData[currentId].finished = true;
                this.userData.chaptersFinished = this.userData.chaptersFinished + 1;
                if(this.userData.chaptersFinished == this.state.data.chapters.length)
                {
                    const status = JSON.parse(window.localStorage.getItem("coursesStatus"));
                    status[this.state.data.id] = true;
                    window.localStorage.setItem("coursesStatus", JSON.stringify(status));
                    
                }
            }
        window.localStorage.setItem(this.state.data.id, JSON.stringify(this.userData))
    }

    componentDidMount()
    {
        //get course data from api
        this.getCurrentCourse().then((d)=>{
                this.setState({
                    data: d,
                    })
                this.userData = this.getUserData(d.id);
                if(this.userData === null)
                {
                    this.userData = {
                    chaptersFinished: 0,
                    currentChapterId: d.chapters[0].id,
                    currentChapterUrl: d.chapters[0].asset.resource.stream.url,
                    chaptersData:{}
                   } 
                   for(let i = 0; i <d.chapters.length; i++)
                   {
                    this.userData.chaptersData[d.chapters[i].id] = {
                        finished: false,
                        lastViewTime: 0
                    }
                   }
                   window.localStorage.setItem(d.id, JSON.stringify(this.userData))
                }
                this.setState(
                {
                    currentChapterId:this.userData.currentChapterId,
                    url:this.userData.currentChapterUrl,
                }
                )
            })       
    }

    componentDidUpdate= ()=>
    {
        if(JSON.stringify(this.userData) !== "{}")
        {

            window.localStorage.setItem(this.state.data.id, JSON.stringify(this.userData))
        }
    }

    handleEndOfChapter = () =>
    {
        this.setUserData()
        const chapterId = this.state.currentChapterId;
        const chapters = this.state.data.chapters;
        for(let i = 0; i < chapters.length; i++)
        {
            if(chapterId === chapters[i].id)
            {
                if(i + 1 < chapters.length )
                {
                    this.switchChapter(chapters[i + 1])
                }
                else
                {
                    this.setUserData()
                    this.setState({url: this.userData.currentChapterUrl})
                }
            }
        }
    }

    ref = player => {
    this.player = player
  }


    videoPlayer()
    {
        return(
            <div>
                <div>
                    <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    playing={true}
                    width='100%'
                    height='100%'
                    url={this.state.url}
                    controls={true}
                    onEnded={this.handleEndOfChapter}
                    onStart={()=>{this.player.seekTo(this.userData.chaptersData[this.userData.currentChapterId].lastViewTime)}}>

                    </ReactPlayer>
                </div>
            </div>
        )
    }

    createFinishSym = () =>
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
    crateAwardSym = ()=>
    {
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
            </svg>
    }

    secondsToMinutes(sec)
    {
        const minutes = Math.floor(sec / 60);
        let seconds = Math.floor(sec - (minutes * 60));
        if (seconds < 10) {seconds = "0"+seconds;}        
        return minutes+':'+seconds;
    }


    chapterListRow = (chapter, index) =>
    {
        if(this.state.data != undefined)
        {
            if (chapter.id === this.state.currentChapterId)
        {
            return <div className='chapterContent' style={{verticalAlign:"middle", backgroundColor:"RGBA(0, 171, 254, 0.08)"}}>
                {this.userData.chaptersData[chapter.id].finished?this.createFinishSym() : this.createPlaySym()}
                <span className='chapterTitle'>{index}. {chapter.title} </span>
                <span className='chapterDuration' >{this.secondsToMinutes(chapter.asset.resource.duration)}</span>
            </div>
        }
        else return (
            <div className='chapterContent' style={{verticalAlign:"middle", opacity:"50%"}}>
                {this.userData.chaptersData[chapter.id].finished ? this.createFinishSym() : this.createPlaySym()}
                <span className='chapterTitle'>{index}. {chapter.title} </span>
                <span className='chapterDuration' >{this.secondsToMinutes(chapter.asset.resource.duration)}</span>
            </div>
        )
        }
    }

    getUserData(courseId)
    {
        return JSON.parse(window.localStorage.getItem(courseId));
    }

    courseList(chaptersFinished)
    {
        const course = this.state.data
        return (
            <div className='row'>
                <div className="listHeadline">
                    <div className='row'>
                        <div className='courseHeadline col-8' style={{fontSize:'1.5rem'}}>{course.headline}</div>
                            <div className='progressCounter' id='progressCounter' style={
                                {
                                    background:"RGBA(0, 171, 254, 0.08)",
                                    width:"90px"
                                }
                            }>
                                    <span>{this.crateAwardSym()} </span>
                                    <span> {chaptersFinished}/{this.state.data.chapters.length}</span>            
                            </div>
                    </div>
                    </div>
                <div className='col'>
                    <div className='card'>
                        {(() => {
                            const arr = [];
                            const chapters = course.chapters;
                            for (let i = 0; i < chapters.length; i++) {
                                arr.push(
                                    <div className='chapter' onClick={()=>this.switchChapter(chapters[i])}>
                                        {this.chapterListRow(chapters[i], i + 1)}
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


    render()
        {
            const state = this.state
            if(this.state.data === undefined)
            {
                return <div>not found</div>
            }
            else
            {
                return (
                    <div className='pageWrapper'>
                        <div className='row'>
                            <div className='col-lg-7 col-sm-12'>
                                {this.videoPlayer()}
                            </div>
                            <div className="col"> 
                                {this.courseList(this.userData.chaptersFinished)}
                            </div>
                        </div>
                    </div>
                )
        }
    }
}
