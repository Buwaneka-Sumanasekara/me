import React from "react";
import "./styles.scss"
import { ReactComponent as MobileIcon } from '../../images/smart-phone.svg';
import { ReactComponent as Desktop } from '../../images/desktop.svg';
import { ReactComponent as Web } from '../../images/web-app.svg';
import { ReactComponent as Plugin } from '../../images/plugin.svg';

type FilterButtonIconProps = {
    onPress: () => void,
    icon: "mobile" | "web" | "desktop" | "plugin"
    active: boolean
}

const FilterButtonIcon = (props: FilterButtonIconProps) => {
    const { icon, onPress, active } = props;



    return <button onClick={onPress} className={`filter-button ${(active ? "active" : "")}`}>

        {icon === "mobile" && <MobileIcon />}
        {icon === "web" && <Web />}
        {icon === "desktop" && <Desktop />}
        {icon === "plugin" && <Plugin />}

    </button>


}

export default FilterButtonIcon
