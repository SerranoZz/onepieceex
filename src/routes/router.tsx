import { createBrowserRouter } from 'react-router-dom';
import CarrinhoPage from '../pages/CarrinhoPage';
import LojaPage from '../pages/LojaPage';
import Layout from './Layout';
import CadastroDeProdutosPage from '../pages/CadastroDeProdutosPage';
import ErrorPage from '../pages/ErrorPage';
import CardsDeProdutosPage from '../pages/CardsDeProdutosPage';
import HomePage from '../pages/HomePage';
import VolumesPage from '../pages/VolumesPage';
import FilmesPage from '../pages/FilmesPage';
import EpisodiosPage from '../pages/EpisodiosPage';
import PersonagensPage from '../pages/PersonagensPage';
import CardDeProdutoPage from '../pages/CardProdutoPage';
import CadastroDeProdutosForm from '../components/CadastroDeProdutosForm';
import useNoticias from '../hooks/useNoticias';
import Noticia from '../interfaces/noticia';

const noticias: Noticia[] = useNoticias();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { 
                path: "/loja", 
                element: <LojaPage />,
                children: [
                    {
                        path: ":slug?",
                        element: <CardsDeProdutosPage />
                    }
                ] 
            },
            { path: "/", element: <HomePage noticias={noticias} /> },       
            { 
                path: "cadastrar-produto", 
                element: <CadastroDeProdutosPage />,
                children: [
                    {
                        path:":id?",
                        element:<CadastroDeProdutosForm/>
                    }
                ]
            },            
            { path: "volumes", element: <VolumesPage /> },
            { path: "filmes", element: <FilmesPage /> },
            { path: "episodios", element: <EpisodiosPage /> },
            { path: "personagens", element: <PersonagensPage /> },   
            { 
                path: "produto", 
                element: <CardDeProdutoPage />,
                children: [
                    {
                        path:":id?",
                        element:<CardDeProdutoPage/>
                    }
                ]
            },
            { path: "carrinho", element: <CarrinhoPage /> },          
        ]
    }
]);
export default router;