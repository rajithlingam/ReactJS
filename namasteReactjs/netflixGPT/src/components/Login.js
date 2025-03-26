
import {netflix_login_bg_img} from "../utils/url";
import Header from "./Header"
const Login = () => {
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src={netflix_login_bg_img} />
      </div>
      <form className="w-4/12 p-10  absolute bg-gradient-to-t from-black my-38 mx-auto right-0 left-0">
        <input type="mail" placeholder="mail Id" className="p-2 m-2 bg-g bg-white"/>
        <input type="password" placeholder="password" className="p-2 m-2 bg-white"/>
      </form>
    </div>
  )
}

export default Login;