import React from 'react';
import { Button } from '@chakra-ui/react';

export const LangSwitcher = ({lang, setLang}) => {
  const handleChangeLang = () => {
    localStorage.setItem("lang", !lang)
    setLang(!lang)
  }

  return (
    <Button
      size="md"
      aria-label={lang ? 'Ler em português' : 'Browse in english'}
      position='fixed'
      left="1em"
      zIndex={2}
      onClick={handleChangeLang}
    >
      {!lang ? 'Ler em português' : 'English version'}
    </Button>
  );
};