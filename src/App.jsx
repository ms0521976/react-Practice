import { useEffect } from 'react';
import { useState } from 'react';

const initialData = [
  {
    id: 1,
    name: '珍珠奶茶',
    describe: '香濃奶茶搭配QQ珍珠',
    price: 50,
    inventory: 20,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    describe: '清新冬瓜配上新鮮檸檬',
    price: 45,
    inventory: 18,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    describe: '綠茶與檸檬的完美結合',
    price: 55,
    inventory: 34,
  },
  {
    id: 4,
    name: '四季春茶',
    describe: '香醇四季春茶，回甘無比',
    price: 45,
    inventory: 10,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    describe: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    inventory: 25,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    describe: '檸檬與冰茶的清新組合',
    price: 45,
    inventory: 20,
  },
  {
    id: 7,
    name: '芒果綠茶',
    describe: '芒果與綠茶的獨特風味',
    price: 55,
    inventory: 18,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    describe: '抹茶與鮮奶的絕配',
    price: 60,
    inventory: 20,
  },
];

function App() {
  const [data, setData] = useState(initialData);
  const [newName, setNewName] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState(0);
  //useState 才能刷新頁面
  //useEffect
  function AddItem() {
    setData([
      ...data,
      {
        id: new Date().getTime(),
        name: newName,
        price, // 同名可以移除 price:price
      },
    ]);
    setNewName(''); //清空上方input
    setPrice(''); //清空上方input
  }

  //callbackFunction, [條件]
  useEffect(() => {
    // //金額加總
    // const total = data.reduce((pre, curr) => {
    //   return pre + curr.price;
    // }, 0);
    setTotal(data.reduce((pre, curr) => pre + curr.price, 0));
  }, [data]);
  return (
    <>
      <input
        type='text'
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type='number'
        value={price}
        onChange={(e) => {
          setPrice(Number(e.target.value));
        }}
      />
      {/* {typeof number} = string 透過input輸入的都是string，故需轉型 */}
      <button
        type='button'
        onClick={() => AddItem()}>
        新增
      </button>
      <table>
        <thead>
          <tr>
            <th>名稱</th>
            <th>價格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      /* 寫法1*/
                      // //item.id 是當前按鈕所選擇的
                      // const newData = data.filter((newItem) => {
                      //   return newItem.id !== item.id; //如果相同會被去除
                      // }); // 淺層複製
                      // setData(newData);
                      /*寫法2*/
                      // setData(
                      //   data.filter((newItem) => {
                      //     return newItem.id !== item.id;
                      //   })
                      // );
                      setData(data.filter((newItem) => newItem.id !== item.id));
                    }}>
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      總計:{total}
    </>
  );
}

export default App;
