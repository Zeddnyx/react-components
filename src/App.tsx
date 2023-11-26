import Index from "./pages/";
import { Routes, Route } from "react-router-dom";

import Providers from "components/Layouts/Providers";

import { data } from "data/homepage";

function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<p>not found</p>} />
        {data.map((item) => (
          <Route key={item.slug} path={item.slug} element={<item.element />} />
        ))}
      </Routes>
    </Providers>
  );
}

export default App;
