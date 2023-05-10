import styled from "@emotion/styled";

export const Btn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 28px;
    gap: 10px;
    width: 248px;

    color: ${({ theme }) => theme.colors.blue};
    background: white;
    border: 2px solid ${({ theme }) => theme.colors.blue};
    border-radius: 40px;

    :hover, :focus {
        padding: 10px 28px;

        background: ${({ theme }) => theme.colors.gradBlue};
        color: ${({ theme }) => theme.colors.white};
        border: none;
    }
`;