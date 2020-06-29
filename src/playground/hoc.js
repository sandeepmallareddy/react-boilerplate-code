import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p> The info is : {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponents) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is privileged information</p>}
            <WrappedComponents {...props}/>
        </div>
    );
}


// const requireAuthentication = (WrappedComponents) => {
//     return (props) => (
//         <div>
//             {props.isAuthenticated ? <WrappedComponents {...props}/> : <p> Please login to view the info</p>}
//         </div>
//     );
// }


const isAuthenticates = (WrappedComponents) => {
    return (props) => (
        <div>
            {props.isAuthenticated? <WrappedComponents {...props} /> : <p>Please login to view the info</p>}
        </div>
    );
}



const AdminInfo = withAdminWarning();
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} info={"These are the details"}/>, document.getElementById('app'));

//ReactDOM.render(<AdminInfo isAdmin = {false} info={"These are the details"}/>, document.getElementById('app'));
