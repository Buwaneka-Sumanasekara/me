import React, { ReactElement } from "react";


import "./styles.scss"



type StepsProps = {
    direction: "horizontal" | "vertical",
    children: React.ReactNode
}
export default function Steps({ direction, children }: StepsProps) {
    return (<div className={`steps ${(direction === "horizontal" ? 'horizontal' : "vertical")}`}>
        {children}
    </div>)
}

type StepItemProps = {
    children: React.ReactNode
}
Steps.Item = function StepItem({ children }: StepItemProps) {
    return <div className="step-item">
        <div className="step-item-icon"></div>
        <div className="step-item-line"></div>
        <div className="step-item-child-wrapper">
            {children}
        </div>

    </div>;
};



