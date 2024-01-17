import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Logo } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logo from "../../assets/logo.svg"

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { SignIn } = useAuth();

  function handleSignIn() {
    SignIn({ email, password });
  }

    return (
        <Container>
            <Form>
                <h1>Access your Drive</h1>
                <p>A safe place to store all your files</p>

                <h2>Sign In</h2>

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={ FiMail }
                    onChange={ e => setEmail(e.target.value) }
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={ FiLock }
                    onChange={ e => setPassword(e.target.value) }
                />

                <Button
                    title="Entrar"
                    onClick={handleSignIn}
                />

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Logo>
                <img src={ logo } alt="" />
                <span>G-Drive</span>
            </Logo>
        </Container>
  );
}
