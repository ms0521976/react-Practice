function OrderList({ cart, createOrder, setDescription }) {
  const totalSum = cart.reduce((acc, item) => acc + item.subtotal, 0);
  return (
    <>
      <div className='text-end mb-3'>
        <h5>
          總計: <span>${totalSum}</span>
        </h5>
      </div>
      <textarea
        className='form-control mb-3'
        rows='3'
        placeholder='備註'
        onChange={(e) => {
          setDescription(e.target.value);
        }}></textarea>
      <div className='text-end'>
        <button
          className='btn btn-primary'
          onClick={(e) => {
            e.preventDefault();
            createOrder();
          }}>
          送出
        </button>
      </div>
    </>
  );
}

export default OrderList;
