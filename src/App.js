import { ThemeProvider } from '@emotion/react';

import Button from "./components/Button/Button";


const theme = {
  colors: {
    yellow: '#FFC107',
    white: '#FDF7F2',
    black: '#111111',
    gradBlue: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
    blue: '#54ADFF',
    lightBlue: '#CCE4FB',
    green: '#00C3AD',
    red: '#F43F5E',
  },
  shadows: {
    small: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    big: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
}

export default App;