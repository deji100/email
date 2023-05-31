import React, {useState} from 'react'

const Form = (props) => {
    const [error, setError] = useState(false);
    const [verify, setVerify] = useState(false)
    

  return (
    <div className="form">
        <div className="x" onClick={() => {
            setError(false);
            setVerify(false);
        }}>X</div>
        <img src={props.img} alt="" />
        <h3>{props.header}</h3>
        {error && <p className="error">Please try again later</p>}
        <form>
            <label for="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="Enter email" />
            <p>We'll never share your email with anyone else</p>
            <label for="password" id="ps">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" />
            <div className="form-btn">
            <button className="cancel" type="button">Cancel</button>
            <button className="login" type="button" onClick={setVerify(!verify)}>
            {verify ? "Verifying..." : "Login"}
            </button>             
        </div>
        </form>
    </div>
  )
}

export default Form