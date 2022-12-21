import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../redux/actions/post';
import '../CreatePost.css';

function CreatePost() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { message } = useSelector(state => state.message);
    const { user: currentUser } = useSelector((state) => state.auth);
    
    const user_id = currentUser.id;
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');

    const [imageEncode, setImageEncode] = useState({
        file: null,
        base64URL: ""
    });

    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                // console.log(baseURL);
                setImage(baseURL);
                resolve(baseURL);
            };
        });
    };

    const handleFileInputChange = e => {
        // console.log(e.target.files[0]);
        let { file } = imageEncode;

        file = e.target.files[0];

        getBase64(file).then(result => {
            file["base64"] = result;
            // console.log("File Is", file);
            setImageEncode({
                base64URL: result,
                file
            });
        }).catch(err => {
            console.error(err);
        });

        setImageEncode({
            file: e.target.files[0]
        });
    };

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
    
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];

    const onChangeTitle  = e => {
        const title = e.target.value;
        setTitle(title);
    };
    
    const onChangePlace  = e => {
        const place = e.target.value;
        setPlace(place);
    };
    
    const [success, setSuccess] = useState(false);
    
    const dataPost = {
        user_id,
        title,
        place,
        image,
        content
    };

    const handleCreatePost = () => {
        dispatch(createPost(dataPost))
            .then(() => {
                setSuccess(true);
                setTimeout( () => navigate('/'),3000)
            })
            .catch(() => {
                setSuccess(false);
            })
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        handleCreatePost();
    }

    return(
        <React.Fragment>
            <h1 className='title-form'><span>Create Post</span></h1>
            
            <div className="container">
            {message && (
                        <div className="form-group row mb-3 mt-3" style={{marginRight: '20px', marginLeft: '20px'}}>
                            <div className={`alert alert-${success ? 'success' : 'danger'}`} role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3 form-group">
                        <div className="col-sm-1">
                            <label for="title">Title</label>
                        </div>
                        <div className="col-sm-11">
                            <input type="text" className="form-control" id="title" name="title" value={title} onChange={onChangeTitle} placeholder="Title of your Post" required/>
                        </div>
                    </div>
                    <div className="row mb-3 form-group">
                        <div className="col-sm-1">
                            <label for="place">Place</label>
                        </div>
                        <div className="col-sm-11">
                            <input type="text" className="form-control" id="place" name="place" value={place} onChange={onChangePlace} placeholder="Place you want to tell" required/>
                        </div>
                    </div>
                    <div className="row mb-3 form-group">
                        <div className="col-sm-1">
                            <label for="image">Image</label>
                        </div>
                        <div className="col-sm-11">
                            <input type="file" className="form-control" id="image" name="image" onChange={handleFileInputChange} required/>
                        </div>
                    </div>
                    <div className="row mb-3 form-group">
                        <div className="col-sm-1">
                            <label for="content">Content</label>
                        </div>
                        <div className="col-sm-11">
                            <ReactQuill 
                                theme='snow' 
                                modules={modules}
                                formats={formats}
                                value={content} 
                                onChange={setContent} 
                                required/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div> 
        </React.Fragment>
    );
}

export default CreatePost;