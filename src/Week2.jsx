import ListGroup from './components/ListGroup';
import OrderList from './components/OrderList';
import Po from './components/Po';

function Week2() {
  return (
    <>
      <div id='root'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4'>
              <ListGroup />
            </div>
            <div className='col-md-8'>
              <OrderList />
              <div className='text-end mb-3'>
                <h5>
                  總計: <span>$100</span>
                </h5>
              </div>
              <textarea
                className='form-control mb-3'
                rows='3'
                placeholder='備註'></textarea>
              <div className='text-end'>
                <button className='btn btn-primary'>送出</button>
              </div>
            </div>
          </div>
          <hr />
          <Po />
        </div>
      </div>
    </>
  );
}
export default Week2;
