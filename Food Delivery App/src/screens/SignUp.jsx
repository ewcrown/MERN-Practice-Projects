import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    let obj = [
        {
            htmlFor: "name",
            label: "Name Here",
            type: "text",
            id: "fa-signup-name",
        },
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
        },
        {
            htmlFor: "location",
            label: "Location Here",
            type: "text",
            id: "fa-signup-location",
        },
    ];

    const [credentials, setCredentials] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await resp.json();

        console.log(data);
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
                <Link className="nav-link" to="/login">
                    Already A User
                </Link>
            </form>
        </div>
    );
};

export default SignUp;
