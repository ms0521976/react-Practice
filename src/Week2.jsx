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

//拆元件方法：先建立要拆出元件的jsx檔案=>剪下>貼上到元件檔案　接著回到原本HTML做Import動作

/*
先解決版型問題：複製片段 JSX 程式碼，並建立新檔案儲存
匯入版型元件：import 該元件，並替換該區塊
最後解決邏輯：如果該狀態、方法外層也用不到，可以放到內層元件；反之，其餘使用 Props 的方式由外向內傳入*/
