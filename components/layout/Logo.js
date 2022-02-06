import Image from 'next/image'
import Whatodogrey from '../../public/images/Whatodogrey.svg'

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