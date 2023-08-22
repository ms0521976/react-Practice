import { useEffect } from 'react';
import { useState } from 'react';

let num = 0; //React 的運作
function WhyuseEffect() {
  num++;
  console.log('元件運行次數', num);

  const [text, setText] = useState('Kelly');
  const [qty, setQty] = useState(0);

  //callbackFunction, [條件]   [條件]可以多個
  //[]預設觸發一次  ->非同步
  //[text]參照text的更新
  useEffect(() => {
    console.log('useEffect:', num);
  }, [qty, text]);

  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log('元件運行次數', num, text);
        }}></input>

      <button onClick={() => setQty(qty + 1)}>{qty}</button>
    </>
  );
}
export default WhyuseEffect;
//useState =>渲染、刷新畫面
//useEffect =>
