import { BsChevronDoubleLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
  return (
    <button onClick={handleClick} type='button' className='text-xl'>
        <BsChevronDoubleLeft />
    </button>
  )
}
