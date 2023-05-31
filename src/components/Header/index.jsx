import { Container, Profile } from './styles';

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/johnsonsiskoris.png"
                alt="Foto do usuário" 
                />

                <div>
                    <span>Bem-Vindo,</span>
                    <strong>Johnson Siskoris</strong>
                </div>
            </Profile>
        </Container>

    );
}