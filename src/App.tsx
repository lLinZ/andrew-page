import { Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages';
import { NextUIProvider } from '@nextui-org/react';
import { theme } from './common';

function App() {
  return (
    <NextUIProvider theme={theme}>
      <Routes>
        <Route path='/' element={<IndexPage />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
