interface Props {
    className?: string;
}

const SubmitIcon = ({className}: Props) => {
    return (
        <svg className={className} viewBox="0 0 46 44" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M1 22.0189C8.33333 21.6859 23 25.6158 23 44" stroke="white" strokeWidth="2"/>
            <path d="M23 44V0" stroke="white" strokeWidth="2"/>
            <path d="M45 22.0189C37.6667 21.6859 23 25.6158 23 44" stroke="white" strokeWidth="2"/>
        </svg>

    )
}
export default SubmitIcon