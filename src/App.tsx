import Index from "./pages/";
import { Routes, Route } from "react-router-dom";
import { data } from "utils/homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<p>not found</p>} />
        {data.map((item) => (
          <Route key={item.slug} path={item.slug} element={<item.element />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
