import React from 'react';
import { Button as ButtonComponent } from '@chakra-ui/react';
import { KEYS } from '../helpers/keys';
import { Grid, GridItem } from '@chakra-ui/react';

export default function CalculatorButtons() {
  function onClick(key) {
    alert(key.text);
  }
  console.log(KEYS);

  return (
    <Grid templateColumns={'repeat(4,1fr)'}>
      {KEYS.map((key) => (
        <GridItem>
          <Button key={key.value} char={key.text} onClick={() => onClick(key)} />
        </GridItem>
      ))}
    </Grid>
  );
}

function Button({ rounded = false, size = 'default', char, ...rest }) {
  return (
    <ButtonComponent {...rest} borderRadius="none" bg="background.100" color="white" width="94px" height="94px">
      {char}
    </ButtonComponent>
  );
}
