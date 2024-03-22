import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <Link className="btn btn-secondary" to={"/"}>Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;