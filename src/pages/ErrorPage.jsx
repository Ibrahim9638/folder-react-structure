import { Link } from 'react-router-dom';
import error from '../assets/error.png'

const ErrorPage = () => {
    return (
        <div className='lg:mx-96 p-28 text-center'>
            <img src={error} alt="" />
            <Link to='/' className='underline font-bold'>Home Page</Link>
        </div>
    );
};

export default ErrorPage;