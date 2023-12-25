import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Login= () => {
    let obj = [
        {
            htmlFor: "email",
            label: "Email Here",
            type: "email",
            id: "fa-signup-email",
        },
        {
            htmlFor: "password",
            label: "Password Here",
            type: "password",
            id: "fa-signup-password",
        }
    ];

    const [credentials, setCredentials] = useState({});

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await fetch("http://localhost:5000/api/loginuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await resp.json();

        if(!data.success) return alert('Error');
        
        localStorage.setItem('authToken', data.authToken)

        navigate("/")

    };

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                {obj.map((single, idx) => (
                    <div className="mb-3" key={idx}>
                        <label htmlFor={single.htmlFor} className="form-label">
                            {single.label}
                        </label>
                        <input
                            type={single.type}
                            className="form-control"
                            id={single.id}
                            aria-describedby={`${single.htmlFor}Help`}
                            value={credentials[single.htmlFor] || ""}
                            onChange={onChange}
                            name={single.htmlFor}
                        />
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link className="nav-link" to="/signup">
                    Create User
                </Link>
            </form>
        </div>
    );
};

export default Login;
