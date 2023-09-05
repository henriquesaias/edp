import React from 'react';
import { Button } from '@chakra-ui/react';

export const LangSwitcher = props => {
  return (
    <Button
      size="md"
      fontSize="lg"
      aria-label={props.lang ? 'Ler em português' : 'Switch to english'}
      variant="ghost"
      onClick={() => props.setLang(!props.lang)}
      {...props}
    >
      {!props.lang ? 'PT' : 'EN'}
    </Button>
  );
};
