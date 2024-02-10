import Button from "../button/button";

const Table = () => {
  const data = [
    {
      id: "1",
      image: "/img/table 1.png",
      name: "Canitos",
      price: 12000,
      qty: "1",
      total: 24000,
      status: "Pending",
      action: "Details",
    },
    {
      id: "2",
      image: "/img/table 1.png",
      name: "Coffee Pow",
      price: 12000,
      qty: "1",
      total: 24000,
      status: "Pending",
      action: "Details",
    },
    {
      id: "2",
      image: "/img/table 1.png",
      name: "Canitos",
      price: 12000,
      qty: "1",
      total: 24000,
      status: "Pending",
      action: "Details",
    },
    {
      id: "2",
      image: "/img/table 1.png",
      name: "Canitos",
      price: 12000,
      qty: "1",
      total: 24000,
      status: "Pending",
      action: "Details",
    },
    {
      id: "2",
      image: "/img/table 1.png",
      name: "Canitos",
      price: 12000,
      qty: "1",
      total: 24000,
      status: "Pending",
      action: "Details",
    },
  ];

  return (
    <table className=" w-full items-center table-auto border-separate border-spacing-x-5 border-spacing-y-5 text-left mt-12">
      <thead>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total Price</th>
          <th>Status</th>
          <th>Action</th>   
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr key={data.id}>
            <td>
              <img src={data.image} alt="" className="w-[90px] h-[49px]" />
            </td>
            <td >{data.name}</td>
            <td>{data.price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</td>
            <td>{data.qty}</td>
            <td>{data.total.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</td>
            <td>{data.status}</td>
            <td>
              <Button className="bg-blue-700 px-3 py-2 text-white rounded-md">
                {data.action}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
