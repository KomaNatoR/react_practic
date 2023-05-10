import styled from "@emotion/styled";

export const NavTag = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 40px;
    margin-left: 160px;

    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.04em;

    a {
        color: ${({ theme }) => theme.colors.black};
        text-decoration: none;
    }
    a.active {
        color: ${({ theme }) => theme.colors.yellow};
    }
`;