/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Test in <Button />", () => {

  const props = {
    boxStyle: "button border-box corner--left",
    innerHtml: "AC",
    value: 0,
  };

  const button = (
    <Button
      innerHtml={props.innerHtml}
      boxStyle={props.boxStyle}
      value={props.value}
    />
  );

  test("should be a match between render and snapshot", () => {
    render(button);
    expect(screen.container).toMatchSnapshot();
  });

  test("should match text in innerText data value", () => {
    render(button);
    expect(screen.getByTestId("innerText").innerHTML).toBe(props.innerHtml);
  });
});
