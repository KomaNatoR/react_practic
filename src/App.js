import { ThemeProvider } from '@emotion/react';

import Button from "./components/Button/Button";
import { theme } from './constants';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
}

export default App;