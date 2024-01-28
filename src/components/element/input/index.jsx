import Label from "./label"
import Input from "./input";

const Inputform = (props) => {

    const {htmlFor, label, type, placeholder, name, className} = props;

    return(
        <div className={className}>
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input type={type} placeholder={placeholder} id={name} name={name}/>
        </div>
    )
}

export default Inputform