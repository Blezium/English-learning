import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/vocabulary">Vocabulary</Link></li>
                <li><Link to="/tests">Tests</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;