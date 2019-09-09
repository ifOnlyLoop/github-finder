import React, {useState,useContext} from 'react'
import Alert from '../layout/Alert'


import GithubContext from '../../context/gihub/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    
    const[text, setText]=useState(''); //hooks
    const {searchUsers,users,clearUsers}= githubContext;
    const {setAlert,alert}=alertContext;
    
    // fun within fun use const (method)
    const onSubmit = (e) => { 
        e.preventDefault();
        if(text === '')
        {
            setAlert({msg:'No input to search for',type:'light'});
        }
        else 
        {
            searchUsers(text)
            setText('')
        }
    }

    const onChange = (e) => setText(e.target.value);
    
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" //state key name 
                    placeholder="Search for users..." 
                    value={text}
                    onChange={onChange}
                />
                
            </form>
            {
                (users.length > 0 & !alert) ?
                <button
                className="btn btn-light btn-block"
                onClick={clearUsers}
                >
                Clear
                </button> :
                <Alert/>
            }
        </div>
    )
}

export default Search
