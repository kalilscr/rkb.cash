import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 1fr 1fr 1fr tmb funciona sem o repeat
    gap: 2rem; // espaçamento entre as colunas
    margin-top: -10rem;

     div {
         background: var(--shape);
         padding: 1.5rem 2rem;
         border-radius: 0.25rem;
         color: var(--text-title);

         header {
             display: flex;
             align-items: center;
             justify-content: space-between;
         }

         strong {
             display: block; // strong por padrao é inline sem botar block o margin top não funciona
             margin-top: 1rem;
             font-size: 2rem;
             font-weight: 500;
             line-height: 3rem;
         }

        &.total-background {
            background: var(--green);
            color: #fff;
        }
    }
`;