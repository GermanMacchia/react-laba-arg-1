import React from 'react';
import { Button as ButtonComponent, Grid, GridItem } from '@chakra-ui/react';
import { KEYS } from '../helpers/keys';
import { useCalculatorContext } from '../context/CalculatorContext';

export default function CalculatorButtons() {
  const { doAction } = useCalculatorContext();

  return (
    <Grid>
      {KEYS.map((key) => (
        <GridItem key={key.value} area={key.value === 'equal' ? '4 / 4 / 6 / 5' : ''}>
          <Button button={key} onClick={() => doAction(key)} />
        </GridItem>
      ))}
    </Grid>
  );
}

function Button({ button, ...rest }) {
  const isBtnEqual = button.value === 'equal';
  return (
    <ButtonComponent
      {...rest}
      borderRadius="none"
      bg={isBtnEqual ? 'orange' : 'background.100'}
      color="white"
      width="94px"
      height={isBtnEqual ? '188px' : '94px'}
    >
      {button.text}
    </ButtonComponent>
  );
}
