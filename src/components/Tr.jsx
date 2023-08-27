function Tr({ item, data, setData }) {
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
}
export default Tr;
