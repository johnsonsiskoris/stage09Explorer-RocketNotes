import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi';


export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu Login</h2>

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    icon={FiLock}
                    placeholder="Senha"
                    type="password"
                />

                <Button title="Entrar" />

                <Link to="/register">
                    Criar Conta
                </Link>

            </Form>

            <Background />
        </Container>
    );
}