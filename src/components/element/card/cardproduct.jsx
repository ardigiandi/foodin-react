import product1 from "../../../assets/img/Image Card 1.jpg"
import Button from "../button/button"

const Cardproduct = (props) => {

    const {children} = props;

    return(
        <div className="flex flex-col">
            {children}
        </div>
    )
}

const header = (props) => {
    const {image} = props;
    return(
        <img src={image} alt="" className="w-[360px] h-[200px]" />
    )
}

const body = (props) => {
    const {children} = props;
    return(
        <p className="py-2">{children}</p>
    )
}

const footer = (props) => {
    const {children} = props;
    return(
        <a>{children}</a>
    )
}

Cardproduct.header = header;
Cardproduct.body = body;
Cardproduct.footer = footer;

export default Cardproduct