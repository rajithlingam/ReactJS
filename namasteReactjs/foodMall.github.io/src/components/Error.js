import { useRouteError } from "react-router";

const Error=()=>{
    const err =useRouteError();
    console.log(err);

    return (
      <div className="Error">
        <ul>
          <li>
            <h1>Hmm...something seems to have gone wrong.....</h1>
            <h2>
              {err.status} : {err.statusText}
            </h2>
            <h3>{err.data}</h3>
          </li>
        </ul>
      </div>
    );
    
};

export default Error; 