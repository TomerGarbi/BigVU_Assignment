import React from 'react'
import {VideoPlayer} from '../videoPlayer/VideoPlayer';
import {CourseList} from '../courseList/CourseList'

import "./Course.css"

export class Course extends React.Component 
{

    data = {
            "id": "12345219dadc0984940b2a6",
            "headline": "Style your Video",
            "description": "Add subtitles, elegant titles, logo, music",
            "chapters": [
                {
                "id": "123450d7dd9369e7dc01d6f",
                "title": "Video Maker - All you need to know ",
                "asset": {
                    "title": "Video Maker .mp4",
                    "resource": {
                    "duration": 319.4,
                    "orientation": "horizontal",
                    "stream": {
                        "audioBitrate": 320002,
                        "audioCodec": "acc",
                        "fps": 30,
                        "height": 360,
                        "mime": "video/mp4",
                        "size": 33044784,
                        "url": "https://assets.bigvu.tv/video/62b445acddbd0bd5bf77989d/4886099b-c672-4d2c-ba90-0581c31ede1c/_oW44zxHp_360.mp4",
                        "videoBitrate": 500743,
                        "videoCodec": "h264",
                        "width": 640
                    },
                    "thumbnail": {
                        "height": 360,
                        "mime": "image/jpeg",
                        "size": 19447,
                        "type": "image",
                        "url": "https://assets.bigvu.tv/video/62b445acddbd0bd5bf77989d/4886099b-c672-4d2c-ba90-0581c31ede1c/_oW44zxHp_thumb_360.0000001.png",
                        "width": 640
                    },
                    "type": "video",
                    "hlsPlaylistUrl": "https://assets.bigvu.tv/assetVideos/62b445acddbd0bd5bf77989d/takes/62b446a4b43171edc6b4ebf9/99863f87-5712-49d1-bd77-8eae55124038/video.m3u8"
                    }
                }
                },
                {
                "id": "12345e2118f35200b48a7d3",
                "title": "Add Automatic Captions to all your videos",
                "asset": {
                    "title": "Automatic Captions.mp4",
                    "resource": {
                    "duration": 252.7,
                    "orientation": "horizontal",
                    "stream": {
                        "audioBitrate": 320000,
                        "audioCodec": "acc",
                        "fps": 30,
                        "height": 360,
                        "mime": "video/mp4",
                        "size": 26150975,
                        "url": "https://assets.bigvu.tv/video/62af0426735f02bea100a802/adb1c975-9f77-488b-a2b4-d033a9f78959/_GryutUzY_360.mp4",
                        "videoBitrate": 500972,
                        "videoCodec": "h264",
                        "width": 640
                    },
                    "thumbnail": {
                        "height": 360,
                        "mime": "image/jpeg",
                        "size": 19489,
                        "type": "image",
                        "url": "https://assets.bigvu.tv/video/62af0426735f02bea100a802/adb1c975-9f77-488b-a2b4-d033a9f78959/_GryutUzY_thumb_360.0000001.png",
                        "width": 640
                    },
                    "type": "video",
                    "hlsPlaylistUrl": "https://assets.bigvu.tv/assetVideos/62af0426735f02bea100a802/takes/62b18fbb35f27e86196b909b/57fc5ea1-3093-4bc7-b61b-39ec39037899/video.m3u8"
                    }
                }
                },
                {
                "id": "12345a007dd9369e7dc01d01",
                "title": "Style Video: Edit video: green screen, add music, logo, Captions and more",
                "asset": {
                    "title": "Style your video.mp4",
                    "resource": {
                    "duration": 319.133333,
                    "orientation": "horizontal",
                    "stream": {
                        "audioBitrate": 320002,
                        "audioCodec": "acc",
                        "fps": 30,
                        "height": 360,
                        "mime": "video/mp4",
                        "size": 33021546,
                        "url": "https://assets.bigvu.tv/video/62af04307364b7c32427983d/28063f3c-4eea-43cd-aec3-6de9f5b653f1/_2u6isTtf_360.mp4",
                        "videoBitrate": 500862,
                        "videoCodec": "h264",
                        "width": 640
                    },
                    "thumbnail": {
                        "height": 360,
                        "mime": "image/jpeg",
                        "size": 19672,
                        "type": "image",
                        "url": "https://assets.bigvu.tv/video/62af04307364b7c32427983d/28063f3c-4eea-43cd-aec3-6de9f5b653f1/_2u6isTtf_thumb_360.0000001.png",
                        "width": 640
                    },
                    "type": "video",
                    "hlsPlaylistUrl": "https://assets.bigvu.tv/assetVideos/62af04307364b7c32427983d/takes/62b18fca508116157d3ccdd9/6b33f765-eb6e-4032-ad00-e19f8dac7c5a/video.m3u8"
                    }
                }
                },
                {
                "id": "123456546799bc05ed8a128b",
                "title": "Captions for TikTok Videos ",
                "asset": {
                    "title": "Tiktok Automatic Captions .mp4",
                    "resource": {
                    "duration": 154.166667,
                    "orientation": "horizontal",
                    "stream": {
                        "audioBitrate": 320002,
                        "audioCodec": "acc",
                        "fps": 30,
                        "height": 360,
                        "mime": "video/mp4",
                        "size": 15967867,
                        "url": "https://assets.bigvu.tv/video/6329b573245a04f76593aa63/724e32d0-ee29-4b49-9cf4-78550b4364c3/asset_360.mp4",
                        "videoBitrate": 501644,
                        "videoCodec": "h264",
                        "width": 640
                    },
                    "thumbnail": {
                        "height": 360,
                        "mime": "image/jpeg",
                        "size": 24345,
                        "type": "image",
                        "url": "https://assets.bigvu.tv/video/6329b573245a04f76593aa63/724e32d0-ee29-4b49-9cf4-78550b4364c3/asset_thumb_360.0000001.png",
                        "width": 640
                    },
                    "type": "video",
                    "hlsPlaylistUrl": "https://assets.bigvu.tv/assetVideos/6329b573245a04f76593aa63/takes/6329b6546799bc05ed8a128d/67f63d58-c79b-44cd-938c-85ac771663fe/video.m3u8"
                    }
                }
                },
                {
                "id": "12345a04118f35200b48ebe7",
                "title": "Green Screen Replacement ",
                "asset": {
                    "title": "Green Screen Replacement .mp4",
                    "resource": {
                    "duration": 215.9,
                    "orientation": "horizontal",
                    "stream": {
                        "audioBitrate": 320000,
                        "audioCodec": "acc",
                        "fps": 30,
                        "height": 360,
                        "mime": "video/mp4",
                        "size": 22347700,
                        "url": "https://assets.bigvu.tv/video/62af042b7364b7c32427981f/253890c0-7c21-4653-83c9-1f3ca8ce612b/_GYi0aePQ_360.mp4",
                        "videoBitrate": 501157,
                        "videoCodec": "h264",
                        "width": 640
                    },
                    "thumbnail": {
                        "height": 360,
                        "mime": "image/jpeg",
                        "size": 20513,
                        "type": "image",
                        "url": "https://assets.bigvu.tv/video/62af042b7364b7c32427981f/253890c0-7c21-4653-83c9-1f3ca8ce612b/_GYi0aePQ_thumb_360.0000001.png",
                        "width": 640
                    },
                    "type": "video",
                    "hlsPlaylistUrl": "https://assets.bigvu.tv/assetVideos/62af042b7364b7c32427981f/takes/62b18fe235f27e86196b921d/ab69a851-e06c-49cc-a6b1-eef3bbd9c670/video.m3u8"
                    }
                }
                },
                {
                "id": "12345a09118f35200b48ec0e",
                "title": "Green Screen Pros & Cons",
                "asset": {
                    "title": "Do's and Don't While Using a Green Screen.mp4",
                    "resource": {
                    "duration": 142,
                    "orientation": "horizontal",
                    "stream": {
                        "audioBitrate": 319999,
                        "audioCodec": "acc",
                        "fps": 30,
                        "height": 360,
                        "mime": "video/mp4",
                        "size": 14707919,
                        "url": "https://assets.bigvu.tv/video/62b1923535f27e86196ba625/9845c03b-639a-4dcf-bdb7-93a041e43e6c/_SOmUwdBc_360.mp4",
                        "videoBitrate": 501640,
                        "videoCodec": "h264",
                        "width": 640
                    },
                    "thumbnails": {
                        "height": 360,
                        "mime": "image/jpeg",
                        "size": 27477,
                        "type": "image",
                        "url": "https://assets.bigvu.tv/video/62b1923535f27e86196ba625/9845c03b-639a-4dcf-bdb7-93a041e43e6c/_SOmUwdBc_thumb_360.0000001.png",
                        "width": 640
                    },
                    "type": "video",
                    "hlsPlaylistUrl": "https://assets.bigvu.tv/assetVideos/62b1923535f27e86196ba625/takes/62b192c2508116157d3ce7d2/91da7ee8-243d-4216-be8f-27f200bce688/video.m3u8"
                    }
                }
                }
            ],
            "summary": [
                "Replace Green",
                "Add Captions",
                "Logo & Music",
                "Biz Card (Intro/Outro)"
            ]
            }
 
    state = {
        url: this.data.chapters[0].asset.resource.stream.url,
        currnetChapter:0,
        currentChapterId:"", 
        chapters: this.data.chapters
    }
    render()
        {
            return (
            <div className='pageWrapper'>
                <div className='row'>
                    <div className='col-7'>
                        <VideoPlayer  parentState={this.state} />
                    </div>
                    <div className="col"> 
                        <CourseList course={this.data}/>
                    </div>
                </div>
            </div>
        )
        }
}
