<<<<<<< HEAD
import Image from 'next/image'
import Whatodogrey from '../../public/images/Whatodogrey.svg'
=======
import Image from "next/image";
import Whatodogrey from "../../public/images/Whatodogrey.svg";

const Logo = () => {
  return (
    <>
      <Image src={Whatodogrey} alt='Logos' height='50' width='150' />
    </>
  );
};
>>>>>>> main

const Logo = () => {
    return (
        <>
            <Image
                src={Whatodogrey}
                alt="Logos"
            />
        </>
    )
}

export default Logo;