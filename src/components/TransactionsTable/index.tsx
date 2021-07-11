import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>              
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvovimento de website</td>
                        <td className="deposit">R$9.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>

                    <tr>
                        <td>Pizza</td>
                        <td className="withdraw">R$-69,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="withdraw">R$-1.200,00</td>
                        <td>Moradia</td>
                        <td>27/03/2021</td>
                    </tr>

                    <tr>
                        <td>Placa de Video</td>
                        <td className="deposit">R$5.000,00</td>
                        <td>Venda</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}