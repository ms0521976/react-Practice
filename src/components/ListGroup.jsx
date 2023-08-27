function ListGroup({ drink, addToCart }) {
  return (
    <a
      href='#'
      className='list-group-item list-group-item-action'
      key={drink.id}
      onClick={(e) => {
        e.preventDefault();
        addToCart(drink);
      }}>
      <div className='d-flex w-100 justify-content-between'>
        <h5 className='mb-1'>{drink.name}</h5>
        <small>${drink.price}</small>
      </div>
      <p className='mb-1'>{drink.description}</p>
    </a>
  );
}
export default ListGroup;
