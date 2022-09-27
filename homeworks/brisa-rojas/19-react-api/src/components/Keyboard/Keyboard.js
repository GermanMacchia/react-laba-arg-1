import React from 'react';
import './styles.css';
import CalcButton from '../CalcButton/CalcButton.js';

const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* THEMES */
const numberTheme = {
  bgColor: '#2E2F3E',
  color: '#fff',
  borderRadius: '0px',
  height: 1,
  width: 1,
};
const operatorsTheme = {
  bgColor: '#363746',
  color: '#FFBB00',
  borderRadius: '0px',
  height: 1,
  width: 1,
};
const equalsTheme = {
  bgColor: '#FFBB00',
  color: '#fff',
  borderRadius: '0px',
  height: 2,
  width: 1,
};
const clearTheme = {
  bgColor: '#363746',
  color: '#fff',
  borderRadius: '30px 0px 0px 0px',
  height: 1,
  width: 1,
};
const deleteTheme = {
  bgColor: '#363746',
  color: '#FFBB00',
  borderRadius: '0px 30px 0px 0px',
  height: 1,
  width: 1,
};

const Keyboard = () => {
  const handleClickOnNumber = (i) => {
    console.log('click on number:', i);
  };

  return (
    <div className="keyboard">
      {numberButtons.map((value) => {
        return (
          <CalcButton
            value={value.toString()}
            theme={numberTheme}
            key={value}
            onClick={() => handleClickOnNumber(value)}
            className={'button-number-' + value}
          >
            {value}
          </CalcButton>
        );
      })}

      {/* OPERATORS BUTTONS */}
      <CalcButton value="." key="dot" theme={numberTheme} className="button-dot">
        {' '}
        .{' '}
      </CalcButton>
      <CalcButton value="÷" key="divide" theme={operatorsTheme} className="button-operator-divide">
        ÷
      </CalcButton>
      <CalcButton value="x" key="multiply" theme={operatorsTheme} className="button-operator-multiply">
        x
      </CalcButton>
      <CalcButton value="-" key="minus" theme={operatorsTheme} className="button-operator-minus">
        -
      </CalcButton>
      <CalcButton value="+" key="plus" theme={operatorsTheme} className="button-operator-plus">
        +
      </CalcButton>

      <CalcButton value="=" key="equals" theme={equalsTheme} className="button-equals">
        =
      </CalcButton>
      <CalcButton value="C" key="clear" theme={clearTheme} className="button-clear">
        c
      </CalcButton>
      <CalcButton value="DEL" key="delete" theme={deleteTheme} className="button-delete">
        del
      </CalcButton>
      <CalcButton value="%" key="percent" theme={numberTheme} className="button-percent">
        %
      </CalcButton>
    </div>
  );
};

export default Keyboard;
