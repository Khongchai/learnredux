import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loginlogout} from './actions/loginlogout';

export default function()
{
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    return(
        <div>
        {isLoggedIn? 
            <div>
              <h3>Some info visible only if logged in.</h3>
              <button onClick={() => dispatch(loginlogout())}>Log Out</button>
            </div>    
            :<button onClick={() => dispatch(loginlogout())}>Log in</button>
            }
        </div>

    )
}