import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';   
import { Input } from '../../components/Input'; 

import { api } from '../../services/api';

import { Column, Container, TenhoContaText, LoginText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';



const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',       
        mode: 'onChange',
    });   

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}`);

            if (data.length && data[0].id) {
                alert('E-mail já cadastrado. Tente novamente');
                return;
            }

            await api.post(`/users`, formData);
            alert('Seu cadastro foi realizado com sucesso');
            navigate('/feed');
        } catch (e) {
            console.error("Erro ao criar a conta:", e);
            alert("Erro ao criar a conta. Tente novamente.");
        }
    };

    return (<>
        <Header />  
        <Container>
            <Column>
                <Title>                    
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas. 
                </Title>                
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="Nome completo" errorMessage={errors?.email?.message} control={control} placeholder="Nome completo"  leftIcon={<MdPerson />} />
                        <Input name="E-mail" errorMessage={errors?.email?.message} control={control} placeholder="E-mail"  leftIcon={<MdEmail />} />
                        <Input name="Password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
                    <Row>
                        <TenhoContaText>Já tenho conta. </TenhoContaText>
                        <LoginText onClick={handleClickSignIn}>Fazer login</LoginText>
                    </Row>
                </Wrapper>                
            </Column>    
        </Container>     
    </>)
}

export { Cadastro }