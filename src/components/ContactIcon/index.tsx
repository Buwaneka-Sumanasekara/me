import React from "react";
import "./styles.scss"
import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as LinkdinIcon } from '../../images/linkdin.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg';
import { ReactComponent as Whatsapp } from '../../images/whatsapp.svg';
import { ReactComponent as Link } from '../../images/link.svg';

type ContactIconProps = {
    value: string,
    type: "email" | "phone" | "link" | "whatsapp" | "linkdin"
}

const ContactIcon = (props: ContactIconProps) => {
    const { type, value } = props;

    function generateLink() {
        if (type === "email") {
            return `mailto: ${value}`
        } else if (type === "phone") {
            return `tel:${value}`
        } else if (type === "whatsapp") {
            return `https://wa.me/${value}`
        } else {
            return `${value}`
        }
    }

    return <a href={generateLink()}>
        <div className="contact-button">
            {type === "email" && <EmailIcon />}
            {type === "phone" && <PhoneIcon />}
            {type === "whatsapp" && <Whatsapp />}
            {type === "link" && <Link />}
            {type === "linkdin" && <LinkdinIcon />}
        </div>
    </a >

}

export default ContactIcon
