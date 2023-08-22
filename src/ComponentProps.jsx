import { useState } from 'react';
import PropType from 'prop-types';
//InputWithLabel 缺少狀態
function InputWithLabel({ text, setText }) {
  //props {} 解構 對應35 36行
  return (
    <>
      <div style={{ border: 'red 1px soild' }}>
        <label htmlFor='text'>標題 {text}</label>
        <input
          type='text'
          id='text'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </>
  );
}
InputWithLabel.propTypes = {
  //使用prop-types工具做驗證
  name: PropType.string,
  setText: PropType.func,
};

function ComponentProps() {
  const [text, setText] = useState('Kelly');
  const [text2, setText2] = useState('安安');
  return (
    <>
      <div className='container'>
        <InputWithLabel
          text={text}
          setText={setText}
        />
        <InputWithLabel
          text={text2} //前面text 是解構第4行{ text, setText }參數，後面tex2是狀態第29行  const [text2, setText2]jz
          setText={setText2}
        />
        <InputWithLabel
          text={1} //前面text 是解構第4行{ text, setText }參數，後面tex2是狀態第29行  const [text2, setText2]jz
          setText={setText2}
        />
        外層的:{text}
      </div>
    </>
  );
}
export default ComponentProps;
