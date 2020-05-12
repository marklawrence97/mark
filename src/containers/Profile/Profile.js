import React from 'react';
import Bio from '../../components/Bio/bio';
import Posts from '../Posts/Posts';
import TimeLine from '../../components/TimeLine/TimeLine';
import { posts, projects } from '../../posts'

const Profile = () => {
    const topPost = posts.filter(post => post.top)
    const topProjects = projects.filter(project => project.top)

    return (
        <>
            <a id="profile"/>
            <Bio/>
            <a id="posts"/>
            <Posts title={"Posts"} 
                topPosts={topPost} 
                posts={posts}
                />
            <a id="projects"/>
            <Posts title={"Projects"} 
                topPosts={topProjects} 
                posts={projects}
                />
            <a id="resume"/>
            <TimeLine />
        </>
    )
}

export default Profile