import style from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

library.add(
  faEnvelopeOpen
)
const EmailInputWithLabel = ({ value, onChange }) => {
    return (
        <div>
        <span className={style.icon}><FontAwesomeIcon icon={faEnvelopeOpen}/></span>
            <input className={style.InputWithLabel}
                // type="text"
                type="email"
                value={value}
                placeholder="Email"
                onChange={e => onChange(e.target.value)} />
            <label className="visuallyhidden"></label>
        </div>
    );
};

export default EmailInputWithLabel;