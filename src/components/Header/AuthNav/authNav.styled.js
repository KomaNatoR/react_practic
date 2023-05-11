import styled from "@emotion/styled";

export const UlTag = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;

    margin-left: auto;

    li a {
        display: inline-block;
        width: 165px;
        text-align: center;
        padding: 8px 20px;
        text-decoration: none;
        border-radius: 40px;
        border: 2px solid ${({ theme }) => theme.colors.yellow};
    }
    li:first-of-type a {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.yellow};
    }
    li:last-of-type a {
        color: ${({ theme }) => theme.colors.yellow};
    }
`;