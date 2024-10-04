const Die = (props: {
    value: number
    isHeld: boolean
    onClick: () => void
}) => {
    return (
        <div
            className={`die-face ${props.isHeld && "die-held"}`}
            onClick={props.onClick}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

export default Die