import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center font-semibold mt-6 mb-10'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-xl mt-3 mb-2'>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;