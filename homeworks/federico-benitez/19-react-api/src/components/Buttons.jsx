import React from 'react';
import { Button as ButtonComponent } from '@chakra-ui/react';
import { KEYS } from '../helpers/keys';
import { Grid, GridItem } from '@chakra-ui/react';
import { useCalculatorContext } from '../context/CalculatorContext';

export default function CalculatorButtons() {
  const { doAction } = useCalculatorContext();
  return (
    <Grid templateColumns={'repeat(4,1fr)'}>
      {KEYS.map((key) => (
        <GridItem key={key.value}>
          <Button button={key} onClick={() => doAction(key)} />
        </GridItem>
      ))}
    </Grid>
  );
}

function Button({ rounded = false, size = 'default', button, ...rest }) {
  return (
    <ButtonComponent {...rest} borderRadius="none" bg="background.100" color="white" width="94px" height="94px">
      {button.text}
    </ButtonComponent>
  );
}
