import { ThemeProvider } from '@emotion/react';
import { theme } from './constants';

import SharedLayout from './components/SharedLayout/SharedLayout';
import PetRoutes from './PetRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SharedLayout />
      
      <PetRoutes />
    </ThemeProvider>
  );
}

export default App;