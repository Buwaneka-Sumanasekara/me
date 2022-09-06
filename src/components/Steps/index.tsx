import React, { ReactElement } from "react";


import "./styles.scss"



type StepsProps = {
    direction: "horizontal" | "vertical",
    children: React.ReactNode
    theme?: "primary" | "secondary"
}
export default function Steps({ direction, children, theme }: StepsProps) {
    return (<div className={`steps ${(direction === "horizontal" ? 'horizontal' : "vertical")} ${(theme === "secondary" ? "secondary" : "")}`}>
        {children}
    </div>)
}

type StepItemProps = {
    children: React.ReactNode
}
Steps.Item = function StepItem({ children }: StepItemProps) {
    return <div className="step-item">
        <div className="step-left">
            <div className="step-item-icon"></div>
            <div className="step-item-line"></div>
        </div>

        <div className="step-item-child-wrapper">
            {children}
        </div>

    </div>;
};



