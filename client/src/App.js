import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import PostDetail from "./pages/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header>
        <Home />
      </Header>
    ),
  },
  {
    path: "/about",
    element: (
      <Header>
        <About />
      </Header>
    ),
  },
  {
    path: "/post/:id",
    element: (
      <Header>
        <PostDetail />
      </Header>
    ),
  },
]);

function App() {
  return (
    <div className=" w-screen h-screen bg-yellow-800/5 text-yellow-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
