import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

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
          <img
            className='avatarLink'
            src='/images/asel-profile.png'
            alt='Asel avatar and GitHub link'
          />
        </a>
      </li>
      <li>
        <a href='https://github.com/Sanlung' target='_blank' rel='noreferrer'>
          <img
            className='avatarLink'
            src='/images/chung-profile.jpeg'
            alt='Chung Kao avatar and GitHub link'
          />
        </a>
      </li>
      <li>
        <a href='https://github.com/dumpidum' target='blank' rel='noreferrer'>
          <img
            className='avatarLink'
            src='/images/ignat-profile.png'
            alt='Ignat avatar and GitHub link'
          />
        </a>
      </li>
    </ul>
    <p>&copy; {new Date().getFullYear()} by team CTD Slaty Egret</p>
  </footer>
);

export default Footer;
