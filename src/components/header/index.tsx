import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Logo src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
    </Container>
  )
}

const Logo = styled.img`
  height: 90px;
`

const Container = styled.div`
  background: linear-gradient(180deg,rgba(0,0,0,.5) 0,transparent);
  border-bottom: transparent;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export default Header;