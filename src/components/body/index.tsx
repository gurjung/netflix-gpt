import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Browse from "../browse";
import Login from "../login";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <Container>
      <RouterProvider router={appRouter} />
    </Container>
  )
}

const Container = styled.div``;

export default Body;