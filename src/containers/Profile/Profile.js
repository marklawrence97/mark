import React from 'react';
import Bio from '../../components/Bio/bio';
import Posts from '../Posts/Posts';
import TimeLine from '../../components/TimeLine/TimeLine';
import { posts, projects } from '../../posts'

const Profile = () => {
    return (
        <>
            <a id="profile"/>
            <Bio/>
            <a id="posts"/>
            <Posts title={"Posts"} posts={posts}/>
            <a id="projects"/>
            <Posts title={"Projects"} posts={projects}/>
            <a id="resume"/>
            <TimeLine />
        </>
    )
}

export default Profile