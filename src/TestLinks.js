const { Link } = require("react-router-dom")


const TestLinks = () => {
    return (
        <div className="tests">
            <Link className="test-link" to="/tests/allWords">All words</Link>
        </div>
    );
}
 
export default TestLinks;
