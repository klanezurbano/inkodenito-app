import FileUpload from './components/FileUpload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World!</h1>} />
        <Route path="/file-upload" element={<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
