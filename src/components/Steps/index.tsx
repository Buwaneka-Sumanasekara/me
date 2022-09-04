import React, { ReactElement } from "react";


type StepProps = {
    title?: string,
    body: ReactElement,
}

const Step = (props: StepProps) => {

    return (
        <div>

        </div>
    )
}


type StepsProps = {
    data: StepProps[],
    direction: "horizontal" | "vertical"
}
const Steps = (props: StepsProps) => {
    return
}

export default Steps;
