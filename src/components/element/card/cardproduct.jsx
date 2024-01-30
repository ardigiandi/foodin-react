const Cardproduct = (props) => {

    const {children} = props;

    return(
        <div className="flex flex-col ">
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
    const {price, handleorder, id} = props;
    return(
        <div className="flex justify-between items-center">
            <a>{price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'} )}</a>
            <button className="bg-blue-500 px-3 py-2 text-white rounded-lg font-semibold" onClick={() => handleorder(id)}>Buy</button>
        </div>
    )
}

Cardproduct.header = header;
Cardproduct.body = body;
Cardproduct.footer = footer;

export default Cardproduct