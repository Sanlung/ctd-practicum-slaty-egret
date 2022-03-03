import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import AselProfile from "../../public/images/asel-profile.png";
import ChungProfile from "../../public/images/chung-profile.jpeg";
import IgnatProfile from "../../public/images/ignat-profile.png";

const Footer = () => (
  <footer>
    <ul className='avatarLinks'>
      <li>
        <a
          href='https://github.com/Sanlung/ctd-practicum-slaty-egret'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon className='avatarLink' icon={faGithub} />
        </a>
      </li>
      <li>
        <a href='https://github.com/Asel-K' target='_blank' rel='noreferrer'>
          <Image
            className='avatarLink'
            src={AselProfile}
            alt='Asel avatar link'
          />
        </a>
      </li>
      <li>
        <a href='https://github.com/Sanlung' target='_blank' rel='noreferrer'>
          <Image
            className='avatarLink'
            src={ChungProfile}
            alt='Chung Kao avatar link'
          />
        </a>
      </li>
      <li>
        <a href='https://github.com/dumpidum' target='blank' rel='noreferrer'>
          <Image
            className='avatarLink'
            src={IgnatProfile}
            alt='Ignat avatar link'
          />
        </a>
      </li>
    </ul>
    <p>&copy; {new Date().getFullYear()} by team CTD Slaty Egret</p>
  </footer>
);

export default Footer;
