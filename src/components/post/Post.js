import './post.css'
import { MoreVert } from '@material-ui/icons'
export default function Post() {
    return (
        <div>
           <div className="post">
               <div className="postWrapper">
                   <div className="postTop">
                       <div className="postTopLeft">
                           <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                           <span className="postUserName">Sofia</span>
                           <span className="postDate">6 mins ago</span>
                       </div>
                       <div className="postTopRight">
                           <MoreVert/>
                       </div>
                   </div>
                   <div className="postCenter">
                       <span className="postText">Hey! its my first post</span>
                       <img className="postImg" src="/assets/post/1.jpeg" alt="" />
                   </div>
                   <div className="postBottom">

                       <div className="postBottomLeft">

                           <img src="assets/like.png" alt="" className="likeIcon" />
                           <img src="assets/heart.png" alt="" className="likeIcon" />
                           <span className="postLikeCounter">32 people liked this</span>
                       </div>
                       <div className="postBottomRight">
                           <span className="postCommentText">9 comments</span>

                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
