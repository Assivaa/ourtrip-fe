import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import '../CreatePost.css';

function CreatePost() {
    const [imageEncode, setImageEncode] = useState({
        file: null,
        base64URL: ""
    });
    const [content, setContent] = useState('');

    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                console.log(baseURL);
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

    return(
        <React.Fragment>
            <h1 className='title-form'><span>Create Post</span></h1>
            <div className="container">
                <form>
                    <div className="row mb-3">
                        <div className="col-sm-1">
                            <label for="title">Title</label>
                        </div>
                        <div className="col-sm-11">
                            <input type="text" id="title" name="title" placeholder="Title of your Post"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-1">
                            <label for="place">Place</label>
                        </div>
                        <div className="col-sm-11">
                            <input type="text" id="place" name="place" placeholder="Place you want to tell"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-1">
                            <label for="image">Image</label>
                        </div>
                        <div className="col-sm-11">
                            <input type="file" id="image" name="image" onChange={handleFileInputChange}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-1">
                            <label for="content">Content</label>
                        </div>
                        <div className="col-sm-11">
                            <ReactQuill 
                                theme='snow' 
                                modules={modules}
                                formats={formats}
                                value={content} 
                                onChange={setContent} />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div> 
        </React.Fragment>
    );
}

export default CreatePost;