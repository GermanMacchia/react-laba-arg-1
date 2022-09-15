import { Button } from "../components/Button";
import deleteIcon from "../assets/delete_icon.svg";
import divideIcon from "../assets/divide_icon.svg";
import minusIcon from "../assets/minus_icon.svg";
import plusIcon from "../assets/plus_icon.svg";
import xIcon from "../assets/x_icon.svg";
import equalIcon from "../assets/equal_icon.svg";
import React from "react";

export const Keypad = React.memo(({ handleOnPushKey }) => {
  const deleteInnerIcon = <img src={deleteIcon} alt="delete icon" />;
  const divideInnerIcon = <img src={divideIcon} alt="divide icon" />;
  const minusInnerIcon = <img src={minusIcon} alt="dminus icon" />;
  const plusInnerIcon = <img src={plusIcon} alt="plus icon" />;
  const xInnerIcon = <img src={xIcon} alt="x icon" />;
  const equalInnerIcon = <img src={equalIcon} alt="equal icon" />;

  return (
    <div className="button-grid bottom-rounded--all">
      <Button
        boxStyle="button border-box corner--left"
        innerHtml="C"
        value="C"
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button border-box"
        innerHtml={divideInnerIcon}
        value="/"
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button border-box"
        innerHtml={xInnerIcon}
        value="*"
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button border-box corner--right"
        value="D"
        innerHtml={deleteInnerIcon}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="7"
        value={7}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="8"
        value={8}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="9"
        value={9}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button border-box"
        innerHtml={minusInnerIcon}
        value="-"
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="4"
        value={4}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="5"
        value={5}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="6"
        value={6}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button border-box"
        innerHtml={plusInnerIcon}
        value="+"
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="1"
        value={1}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="2"
        value={2}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="3"
        value={3}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button large-box bottom-rounded--right"
        innerHtml={equalInnerIcon}
        value="="
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box bottom-rounded--left"
        innerHtml="%"
        value="%"
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="0"
        value={0}
        handleOnPushKey={handleOnPushKey}
      />
      <Button
        boxStyle="button middle-box"
        innerHtml="."
        value="."
        handleOnPushKey={handleOnPushKey}
      />
    </div>
  );
});
