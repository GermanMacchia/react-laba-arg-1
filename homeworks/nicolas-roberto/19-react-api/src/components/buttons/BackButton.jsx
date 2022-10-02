import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import Button from '@material-ui/core/Button';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

export default function BackButton() {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <Button
      style={{
        borderRadius: '0px 30px 0px 0px',
        backgroundColor: '#363746',
        width: 93,
        height: 93,
      }}
      type="button"
      onClick={() => handleBackButton()}
    >
      <BackspaceOutlinedIcon
        fontSize="large"
        style={{
          color: '#FFBB00',
        }}
      />
    </Button>
  );
}
