import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FaNewspaper } from "react-icons/fa6";

const Navbar = () => {

  const style = {
    marginRight: "18rem"
  };

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand text-white d-flex justify-content-center align-items-center gap-2" to="/general" style={style}><FaNewspaper /> NewsHub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/general">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/technology">Technology</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar
