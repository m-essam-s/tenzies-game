const Die = (props: {
    value: number
    isHeld: boolean
}) => {
    return (
        <div className={`die-face ${props.isHeld && "die-held"}`}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

export default Die