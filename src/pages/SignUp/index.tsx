import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form, Logo } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import logo from "../../assets/logo.svg"

export function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((e) => {
        if (e.response) {
          alert(e.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleSignUp();
  }

    return (
        <Container>
            <Logo>
                <img src={ logo } alt="" />
                <span>G-Drive</span>
            </Logo>
            <Form 
                onSubmit={handleSubmit}
            >
                <h1>Sign Up</h1>
                <p>A safe place to store all you files</p>

                <h2>Create an account</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={handleNameChange}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                    onChange={handleEmailChange}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={handlePasswordChange}
                />

                <Button title="Cadastrar" type="submit" />

                <Link to="/">Voltar para o login</Link>
            </Form>
        </Container>
    );
}
