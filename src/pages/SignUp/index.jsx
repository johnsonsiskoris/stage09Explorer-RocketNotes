import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';

export function SignUp() {
    return (
        <Container>
            <Background />
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta!</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                />

                <Input
                    placeholder="Email"
                    type="text"
                />

                <Input
                    placeholder="Senha"
                    type="password"
                />

                <Button title="Cadastrar" />

                <Link to="/Signin">
                    Voltar para o login
                </Link>

            </Form>

        </Container>
    );
}