import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";



function App() {
  const [disable,setDesable] = useState(false);
  const [imagem, setImage] = useState(require("./assets/biscoito.png"));
  const [frase,setFrase] = useState('...');
  let frases = ['É em meio a dificuldade que se encontra a oportunidade',
  'O êxito é ir de frustração a frustração sem perder a animação',
  'Mesmo que algo pareça difícil, nunca desista antes de tentar',
  'Você é o único que entende as suas dificuldades, por isso motive se a prosseguir',
  'Não é uma vida ruim, é apenas um dia ruim, lembre-se disso',
  'A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis',
  'Que os dias bons se tornem rotina, e os ruins se tornem raros',
  'É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota',
  'Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução',
  'Já pensou que você já superou muitas dificuldades até aqui?',
  'Suas pequenas vitórias são todas as dificuldades superadas durante sua vida, tenha orgulho delas',
  'Cada dificuldade ultrapassada te faz mais forte',
  'Desistir não deve ser considerado, mesmo que as coisas não sejam fáceis',
  'O êxito é a somatória dos pequenos esforços repetidos diariamente',
  'Para quem está iluminado, os dias de luz sempre retornam',
  'Conheci o pior das pessoas e o melhor de mim, passando por tempos difíceis',
  'Você não vai encontrar ninguém para sorrir por ti, então não deixe de sorrir',
  'Mesmo que nem todo dia seja bom, há algo de bom todo dia',
  'Em dias difíceis, lembre-se do que Deus já fez por ti, Recorde o que pode te oferecer esperança',
  'Da mesma forma que a felicidade não dura para sempre, a tristeza também não',
  'As dores não são eternas, se permita, o seu melhor é o suficiente',
  'Mesmo que a jornada seja lenta, abrir mão não acelera',
  'Que a expectativa por dias melhores nunca nos falte',
  'Você é maior do que toda essa tormenta, seja resiliente',
  'A vida é um eterno recomeço',
  'O fruto do que você escolher hoje, é o que você viverá amanhã',
  'Ser uma pessoa melhor é o objetivo do dia',
  'Se nada der certo hoje, acorde mais cedo amanhã e tente novamente',
  'Você nunca irá fazer nada, se ficar esperando pelas situações perfeitas',
  'O futuro ainda não chegou, seja grato pelo agora',
  'Para chegar em lugares maravilhosos, é necessário passar por caminhos difíceis',
  'As estrelas mais brilhantes são produzidas nas noites mais escuras',
  'A diferença entre os dias ruins e bons, é que um ensina e o outro marca',
  'A superação da dificuldade depende apenas de você',
  'Se não está feliz com algo, mexa se!',
  'Mesmo que a conquista venha apenas às vezes, não deixe de lutar',
  'Está na hora de deixar o passado no lugar dele e seguir em frente',
  'Superação é esquecer o ontem para um amanhã melhor e promitente',
  'Domine os seus medos!',
  'Você não chegou até aqui por acaso, para tudo existe uma razão, Continue em frente',
  'Você terá possibilidade de ganhar, enquanto tiver força para lutar',
  'Seus medos morrerão de fome, se alimentar a sua motivação',
  'Vencer momentos difíceis pede esforço, entretanto todos somos capacitados para isso, recomeçar e escolher um novo caminho',
  'Problemas não são barreiras, mas chances de ímpares de superação e desenvolvimento',
  'Você só será vencedor se lutar hoje e sempre, que os fracassos da vida não sejam motivo para tristeza',
  'Diversas coisas me fizeram sofrer, entretanto elas somente precisavam acontecer para me fazer crescer',
  'Não importa se o obstáculo é forte, difícil ou grande demais, pois a persistência para vencer supera qualquer coisa',
  'Conforme você superar cada desafio, você sentirá que com motivação e fé nada é impossível de acontecer',
  'Não há outra forma de crescer, senão superar os desafios e os medos, Deixe-os vir',
  'Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação, Tudo vai dar certo',
  'Está enganado quem pensa que o meu coração cheio de cicatrizes não tem forças para prosseguir',
  'O caminho para realizar nossos sonhos fica menor, a cada passo de superação que damos',
  'Em um mundo cheio de adversidades, quem não desiste sempre sairá como vencedor no final',
  'Até que ser forte seja a sua única opção, você não saberá o quão forte você é',
  'As pedras que atrapalham a sua jornada hoje, irão enfeitar a sua estrada amanhã, Siga em frente e não se dê por derrotado',
  'Existem momentos em que caímos, mas nos reerguemos melhor do que antes',
  'Permita-se começar e recomeçar quantas vezes forem necessárias',
  'Apenas grandes guerreiros recebem grandes batalhas',
  'As pequenas vitórias devem ser superadas',
  'Tentar é sinônimo de vencer',
  'Aprenda a ignorar as coisas para ser feliz',
  'Quando você aprender que tem que se levantar sozinho, você vai aprender a ser forte',
  'Você não está voltando para trás, então não olhe para lá',
  'A sua competição é com você mesmo',
  'Se não batalhar por nada, você será derrotado por qualquer coisa']

  function reiniciarBiscoito(){
    setImage(require('./assets/biscoito.png'))
    setFrase('...')
  }

  function quebraBiscoito(){
    setImage(require('./assets/biscoitoAberto.png'))
    let fraseSorteada = Math.floor(Math.random()*frases.length)
    setDesable(true);
    setFrase("\"" +frases[fraseSorteada]+ "\"" +'.')
    setTimeout(()=>{setImage(require('./assets/biscoito.png')), setFrase('...'),setDesable(false)}, 10000)
     
  }


  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.img} />
      <Text style={styles.textofrase}>{frase}</Text> 

      <TouchableOpacity style={styles.btn} disabled={disable} onPress={quebraBiscoito}>
        <View style={styles.areaBtn}>
          <Text style={styles.textBtn}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={[styles.btn,{marginTop:15, borderColor:'#121212'}]} onPress={reiniciarBiscoito}>
        <View style={styles.areaBtn}>
          <Text style={[styles.textBtn,{color:'#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize:20,
    color:'#dd7b22',
    margin: 30,
    textAlign: "center",
    fontStyle: 'italic',
  },
  btn:{
    width:230,
    height:50,
    borderColor:'#dd7b22',
    borderWidth:1,
    borderRadius:10   
  },
  areaBtn:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  textBtn:{
    fontSize:17,
    fontWeight:'bold',
    color:'#dd7b22'
  }
});

export default App;
