import style from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faLock
)
const PasswordInputWithLabel = ({ value, onChange, labelTextContent }) => {
    return (
        <div>
            <span className={style.icon}><FontAwesomeIcon icon={faLock}/></span>
            <input className={style.InputWithLabel}
                type="password"
                value={value}
                placeholder={labelTextContent}
                onChange={e => onChange(e.target.value)} />
            {/* <label className="visuallyhidden">{labelTextContent}</label> */}
        </div>
    );
};

export default PasswordInputWithLabel;