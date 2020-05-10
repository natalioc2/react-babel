import React, {Fragment, useState} from 'react';

export default function App() {

   const [title,setTitle] = useState('React App 2020');
   const [done,setDone] = useState(true);

   const handleClick = () =>{
      setDone(!done);
   }

   return (
      <div className="jumbotron">
         <h1 className="display-4">{title}</h1>
         <p className="lead">Basic REACT configuration with webpack, bootstrap and SASS, using the latest version of BABEL.</p>
         <hr className="my-4"/>
         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
         <button onClick={handleClick} className="btn btn-primary">
               Value : {done.toString()}
         </button>
      </div>
   );
}
