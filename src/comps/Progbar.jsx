import React from 'react'
import { ProgressBar } from "react-step-progress-bar";
import './Progbar.css'

const Progbar = () => {
    return (
        <ProgressBar
            percent={75}
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        >
            <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`step (${accomplished ? "compleated" : ""})`}>
                        1
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`step (${accomplished ? "compleated" : ""})`}>
                        2
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`step (${accomplished ? "compleated" : ""})`}>
                        3
                    </div>
                )}
            </Step>
        </ProgressBar>
    )
}

export default Progbar