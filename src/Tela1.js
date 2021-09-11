import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';


import FlatComponent from '../components/FlatComponent';


const Tela1 = () => {


  const data = [
    { key: '0', filme: 'Magoo! O Cão', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://image.yts.rs/images/tt0102826/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '1', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '2', filme: 'Pawwww! A comédia', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', 
    image: 'https://image.yts.rs/images/tt11832046/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '4', filme: 'Magoo! O Cão', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://image.yts.rs/images/tt0102826/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '5', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '6', filme: 'Pawwww! A comédia', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', 
    image: 'https://image.yts.rs/images/tt11832046/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '7', filme: 'Magoo! O Cão', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://image.yts.rs/images/tt0102826/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '8', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '9', filme: 'Pawwww! A comédia', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', 
    image: 'https://image.yts.rs/images/tt11832046/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '10', filme: 'Magoo! O Cão', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://image.yts.rs/images/tt0102826/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '11', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '12', filme: 'Pawwww! A comédia', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', 
    image: 'https://image.yts.rs/images/tt11832046/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '13', filme: 'Magoo! O Cão', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://image.yts.rs/images/tt0102826/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '14', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '15', filme: 'Pawwww! A comédia', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', 
    image: 'https://image.yts.rs/images/tt11832046/medium_cover_image.jpg', descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    
  ]


  return (
    
    <View>
      <FlatList data={data} renderItem={({ item }) => <FlatComponent data={item} />} />
    </View>
    
  );
}

export default Tela1;