import styled from "styled-components"
import Header from "../header";
import SignIn from "./SignIn";

function Login() {
  return (
    <Container>
      <Header />
      {/* TO DO image size depends on screen size please check */}
      <SignIn />
      <BackgroundImage src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" />
    </Container>
  )
}

const BackgroundImage = styled.img``

const Container = styled.div``;

export default Login