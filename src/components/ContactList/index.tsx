import React from "react";
import ContactIcon from "../ContactIcon";
import BasicInfo from '../../data/basic_info.json';
import "./styles.scss"

type ContactListProps = {
    showOnMobile: boolean
}

const ContactList = (props: ContactListProps) => {
    const { showOnMobile } = props;
    return <div id={`contacts`} className={`py-3 ${showOnMobile ? "" : "hide"}`}>
        <ContactIcon type="phone" value={BasicInfo.contacts.mobile} />
        <ContactIcon type="email" value={BasicInfo.contacts.email} />
        <ContactIcon type="whatsapp" value={BasicInfo.contacts.mobile} />
        <ContactIcon type="linkdin" value={BasicInfo.contacts.linkdin} />
    </div>
}

export default ContactList
