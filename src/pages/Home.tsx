import { useNavigate } from 'react-router-dom';

// Em react a imagem sempre é importada, ele nao etende o caminho passado como parametro
import illustration from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import googleIconImg from '../assets/img/google-icon.svg';

// Impotando componentes
import { Button } from '../components/Button';

// CSS
import '../styles/auth.scss';


export function Home(){

  //Navegar em outra página clicando no link desse componente
  const navigate = useNavigate();
  function navigateToNewRoom(){
    navigate('/rooms/new');
  };

  return(
    <div id='page-auth'>
      <aside>
        <img src={illustration} alt="Ilustacao simbolizando perguntas e respostas" />
        <strong> Crie salas de Q&amp; ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Logotipo let me ask"/>
          <button onClick={ navigateToNewRoom } className='create-room'> 
            <img src={googleIconImg} alt="Logo do google"/>
            Crie sua sala com o Google 
          </button>
          <div className='separator'> Ou entre em uma sala </div>
          <form>
            <input type="text"
            placeholder='Digite o código da sala'
            />
            <Button type='submit'>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
};