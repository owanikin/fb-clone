import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image='https://miro.medium.com/max/2286/0*cTEG9zvMxWBiBuyA'
                profileSrc='https://miro.medium.com/max/2286/0*cTEG9zvMxWBiBuyA'
                title="Michael Hammond"
            />
            <Story 
                image='https://pbs.twimg.com/profile_images/1171697932166467586/r-Z32P2V_400x400.jpg'
                profileSrc='https://pbs.twimg.com/profile_images/1171697932166467586/r-Z32P2V_400x400.jpg'
                title='Ifeoluwa Oderinde'

            />
            <Story 
                image="https://pbs.twimg.com/profile_images/1376968395577511941/4Xll-ks2_400x400.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/1376968395577511941/4Xll-ks2_400x400.jpg"
                title="Yusuf Ola"
            />
            <Story 
                image="https://pbs.twimg.com/profile_images/1348692980874547200/79z-aJxs_400x400.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/1348692980874547200/79z-aJxs_400x400.jpg"
                title="Andrew Miracle" 
            />
            <Story 
                image="https://media-exp1.licdn.com/dms/image/C4D03AQECvMZkUTJuwg/profile-displayphoto-shrink_800_800/0/1568126368760?e=1625097600&v=beta&t=sVAfTVLdgj-oWUGukzHvdD2LmbgNNV06WTL8XAzL0hY"
                profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQECvMZkUTJuwg/profile-displayphoto-shrink_800_800/0/1568126368760?e=1625097600&v=beta&t=sVAfTVLdgj-oWUGukzHvdD2LmbgNNV06WTL8XAzL0hY"
                title="Chisomaga Ukaegbu"
            />
        </div>
    )
}

export default StoryReel
