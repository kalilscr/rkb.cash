import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';
<<<<<<< HEAD
import { Container, TransacyionTypeContainer, RadioBox} from './styles';
import { useState } from 'react';
=======
import { Container, TransacyionTypeContainer} from './styles';
>>>>>>> b05ad3043ab018617036806b1a6505b0ffa8ab63

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps ) {
    const [type, setType] = useState('deposit');

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
<<<<<<< HEAD

            <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar"/>
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder="Título"/>

                <input type="number" placeholder="Valor"/>

                <TransacyionTypeContainer>
                    <RadioBox type="button" 
                    onClick={() => {setType('deposit'); }}
                    isActive={type === 'deposit'}
                    activeColor={'green'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type="button" 
                    onClick={() => {setType('withdraw'); }}
                    isActive={type === 'withdraw'}
                    activeColor={'red'}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransacyionTypeContainer>

                <input placeholder="Categoria"/>

                <button type="submit">Cadastrar</button>

=======

            <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar"/>
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder="Título"/>

                <input type="number" placeholder="Valor"/>

                <TransacyionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransacyionTypeContainer>

                <input placeholder="Categoria"/>

                <button type="submit">Cadastrar</button>

>>>>>>> b05ad3043ab018617036806b1a6505b0ffa8ab63
            </Container>
        </Modal>
    );
}