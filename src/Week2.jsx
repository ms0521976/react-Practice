import { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import ListGroup from './components/ListGroup';
import OrderList from './components/OrderList';
import Po from './components/Po';
const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
  },
];

function HomeWork() {
  const [drinks] = useState(data);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const [description, setDescription] = useState('');
  const [order, setOrder] = useState({});

  const addToCart = (drink) => {
    setCart([
      ...cart,
      {
        ...drink,
        id: new Date().getTime(),
        quantity: 1,
        subtotal: drink.price,
      },
    ]);
  };

  const updateCart = (item, value) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: parseInt(value),
          subtotal: cartItem.price * parseInt(value),
          //summaryTotal: parseInt((subtotal += subtotal)),
        };
      }
      return cartItem;
    });
    setCart(newCart);
  };

  const createOrder = () => {
    setOrder({
      id: new Date().getTime(),
      cart,
      description,
      sum,
    });
    setCart([]);
    setDescription('');
  };

  useEffect(() => {
    /*寫法1*/
    // const total = cart.reduce((pre, next) => {
    //   return pre + next.price;
    // }, 0);
    // setSum(total);
    setSum(
      cart.reduce((pre, next) => {
        return pre + next.price;
      }, 0)
    );
  }, [cart]);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='list-group'>
            {drinks.map((drink) => {
              return (
                <ListGroup
                  key={drink.id}
                  drink={drink}
                  addToCart={addToCart}
                />
              );
            })}
          </div>
        </div>
        <div className='col-md-8'>
          <table className='table'>
            <thead>
              <tr>
                <th
                  scope='col'
                  width='50'>
                  操作
                </th>
                <th scope='col'>品項</th>
                <th scope='col'>描述</th>
                <th
                  scope='col'
                  width='90'>
                  數量
                </th>
                <th scope='col'>單價</th>
                <th scope='col'>小計</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <button
                        type='button'
                        className='btn btn-sm'
                        onClick={() => {
                          const newCart = cart.filter((cartItem) => {
                            return cartItem.id !== item.id;
                          });
                          setCart(newCart);
                        }}>
                        x
                      </button>
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <small>{item.description}</small>
                    </td>
                    <td>
                      <select
                        className='form-select'
                        value={item.quantity}
                        onChange={(e) => {
                          const value = e.target.value;
                          updateCart(item, value);
                        }}>
                        {[...Array(10).keys()].map((item) => {
                          return (
                            <option
                              value={item + 1}
                              key={item}>
                              {item + 1}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.subtotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {cart.length === 0 ? (
            <div
              className='alert alert-primary text-center'
              role='alert'>
              請選擇商品
            </div>
          ) : (
            <OrderList
              cart={cart}
              createOrder={createOrder}
              setDescription={setDescription}
            />
          )}
        </div>
      </div>
      <hr />
      <div className='row justify-content-center'>
        <div className='col-8'>
          {!order.id ? (
            <div
              className='alert alert-secondary text-center'
              role='alert'>
              尚未建立訂單
            </div>
          ) : (
            <Po order={order} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeWork;
