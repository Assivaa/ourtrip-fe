import '../DetailPost.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import postService from '../../services/post';

const API_URL =  'https://sugary-gifted-enthusiasm.glitch.me/';
function DetailPost() {
    const data = {};
    const [currentPost, setCurrentPost] = useState(data);
    const params = useParams();
    // const navigate = useNavigate();

    const getPost = id => {
        postService.get(id)
            .then(response => {
                setCurrentPost(response.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getPost(params.id);
    }, [params.id]);

    // console.log(currentPost.data);
    return (
        <section className='blog-posts grid-system'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-8">
                    <div className="all-blog-posts">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="blog-post">
                            <div className="blog-thumb">
                            <img src={API_URL+currentPost.data.image} alt=""/>
                            </div>
                            <div className="down-content">
                            <h4>{currentPost.data.title}</h4>
                            <ul className="post-info">
                                <li><a href="google.com">{currentPost.data.user_first_name+" "+currentPost.data.user_last_name}</a></li>
                                <li><a href="google.com">{currentPost.data.createdAt.slice(0,15)}</a></li>
                                <li><a href="#getComments">{currentPost.data.comments.length+" Comments"}</a></li>
                            </ul>
                            <div 
                                dangerouslySetInnerHTML={{__html: currentPost.data.content}}
                            />
                            {/* <div className="post-options">
                                <div className="row align-items-end">
                                    <div className="col">
                                        <ul className="post-share">
                                        <li><i className="fa fa-share-alt"></i></li>
                                        <li><a href="google.com">Facebook</a>,</li>
                                        <li><a href="google.com"> Twitter</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="sidebar-item submit-comment">
                            <div className="sidebar-heading">
                            <h2>Your comment</h2>
                            </div>
                            <div className="content">
                            <form id="comment" action="#" method="post">
                                <div className="row">
                                <div className="col-lg-12">
                                    <fieldset>
                                    <textarea name="message" rows="6" id="message" placeholder="Type your comment" required=""></textarea>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                    <button type="submit" id="form-submit" className="main-button">Submit</button>
                                    </fieldset>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="sidebar-item comments" id='getComments'>
                            <div className="sidebar-heading">
                            <h2>4 comments</h2>
                            </div>
                            <div className="content">
                            <ul>
                                <li>
                                <div className="author-thumb">
                                    <img src="images/blank-profile.png" alt=""/>
                                </div>
                                <div className="right-content">
                                    <h4>Charles Kate<span>May 16, 2020</span></h4>
                                    <p>Fusce ornare mollis eros. Duis et diam vitae justo fringilla condimentum eu quis leo. Vestibulum id turpis porttitor sapien facilisis scelerisque. Curabitur a nisl eu lacus convallis eleifend posuere id tellus.</p>
                                </div>
                                </li>
                                <li>
                                <div className="author-thumb">
                                    <img src="images/blank-profile.png" alt=""/>
                                </div>
                                <div className="right-content">
                                    <h4>Belisimo Mama<span>May 16, 2020</span></h4>
                                    <p>Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula. Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.</p>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="sidebar">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="sidebar-item recent-posts">
                            <div className="sidebar-heading">
                            <h2>Related Post</h2>
                            </div>
                            <div className="content">
                            <ul>
                                <li style={{listStyle:'none'}}><a href="post-details.html">
                                <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                                <span>May 31, 2020</span>
                                </a></li>
                                <li style={{listStyle:'none'}}><a href="post-details.html">
                                <h5>Suspendisse et metus nec libero ultrices varius eget in risus</h5>
                                <span>May 28, 2020</span>
                                </a></li>
                                <li style={{listStyle:'none'}}><a href="post-details.html">
                                <h5>Swag hella echo park leggings, shaman cornhole ethical coloring</h5>
                                <span>May 14, 2020</span>
                                </a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailPost;