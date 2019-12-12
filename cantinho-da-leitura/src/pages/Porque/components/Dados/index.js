import React from 'react';
import './styles.css'
import Box from './Box';
import Gazeta from '../../../../assets/img/dados01.jpg';
import JornalNacional from '../../../../assets/img/dados02.jpg';
import Folha from '../../../../assets/img/dados03.jpg';

const Dados = () => {
    return (
        <div>
            <h2 className="tituloDados">Dados sobre o Brasil</h2>
            <Box
                src={Gazeta}
                alt="Senhora de idade lê livro numa biblioteca"
                titulo="44% da população brasileira não tem hábito de leitura"
                veiculo="Gazeta do Povo"
                descricao="Parcela de brasileiros que se considera leitora subiu de 55%, em 2007, para 56% em 2015."
                link="https://www.gazetadopovo.com.br/educacao/44-da-populacao-brasileira-nao-tem-habito-de-leitura-bjf3zth67qibj2nj6paxanjb8/"
            />
            <Box
                src={JornalNacional}
                alt="Professora dá aula para alunos usando um livro"
                titulo="Pesquisa mostra que três em cada dez brasileiros não sabem ler"
                veiculo="Jornal Nacional"
                descricao="Os chamados analfabetos funcionais não aprenderam o suficiente para entender um texto."
                link="https://g1.globo.com/jornal-nacional/noticia/2018/08/03/pesquisa-do-ibope-mostra-que-tres-em-cada-dez-brasileiros-nao-sabem-ler.ghtml"
            />
            <Box
                src={Folha}
                alt="Estante de madeira repleta de livros"
                titulo="Jovens leem mais no Brasil, mas hábito de leitura diminui com a idade"
                veiculo="Folha de S. Paulo"
                descricao="A quantidade anual média de livros lidos por habitante passou de 4 para 4,96."
                link="https://www1.folha.uol.com.br/seminariosfolha/2019/09/jovens-leem-mais-no-brasil-mas-habito-de-leitura-diminui-com-a-idade.shtml"
            />
        </div>
    )
}

export default Dados;
