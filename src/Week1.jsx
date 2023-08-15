import { useState } from 'react';

const data = [
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

function Week1() {
  const [menu, setMenu] = useState(data);
  return (
    <table>
      <thead>
        <tr>
          <th scope='col'>品項</th>
          <th scope='col'>描述</th>
          <th scope='col'>價格</th>
          <th scope='col'>庫存</th>
        </tr>
      </thead>
      <tbody>
        {menu.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.describe}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => {
                    const newMenu = menu.map((newItem) =>
                      newItem.id === item.id
                        ? {
                            ...newItem,
                            inventory: newItem.inventory++,
                          }
                        : newItem
                    );
                    // const newMenu = [...data]; //展開 ES6
                    // newMenu[0].inventory += 1;
                    console.log(newMenu);
                    setMenu(newMenu);
                  }}
                >
                  +
                </button>
                {item.inventory}
                <button>-</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Week1;
