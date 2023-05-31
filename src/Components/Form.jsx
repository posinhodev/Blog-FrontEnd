import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import React, {useState} from 'react';

const Form = () => {
    /**
     * 
     */
    const Api_Url = 'http://localhost:8000/api'

    /**
     * 
     */
    const [title, settitle] = useState('');
    const [description , setdescription] = useState('');
    const [error, seterror] = useState('');
    const [errortext, seterrortext] = useState('');
    const [loading, setloading] = useState(false);

    /**
     * 
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title === '' || description === ''){
            seterror(true)
            seterrortext('Fill all field');
        } else {
            seterror(false)
            setloading(true)

            let query= await axios.post(Api_Url+'/posts/add', {
                title: title,
                description: description
            }).then(
                setloading(false),
                settitle(''),
                setdescription('')
            ).catch((e)=> console.error(e))
            console.log(query)
        }
    }

    /**
     * 
     */
    return <div className='sidebar'>
        {error ? <div className="error_field">
            <span className="error_text"> {errortext} </span>
        </div>:null}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder='Post title ...' />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
            </div>
            <div>
                <button disabled={loading?true:null}>Save Post</button>
            </div>
        </form>
    </div>;
}

export default Form;
