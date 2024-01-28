const Label = (props) => {

    const {children, htmlFor} = props;

    return(
        <label htmlFor={htmlFor}>
            {children}
        </label>
    )
}

export default Label