import Image from "next/image";
import Whatodogrey from "../../public/images/Whatodogrey.svg";

const Logo = () => {
  return (
    <div className='logo'>
      <Image src={Whatodogrey} alt='Logo' height='50' width='120' />
    </div>
  );
};

export default Logo;
