import { ThemeProvider } from '@emotion/react';
import { theme } from './constants';

import PetRoutes from './PetRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <PetRoutes />
    </ThemeProvider>
  );
}

export default App;