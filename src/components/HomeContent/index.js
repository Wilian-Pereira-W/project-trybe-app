import React, { useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import CarouselRender from '../Carousel';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import TeachToProgram from '../TeachToProgram';
import WeTeachToLearn from '../ WeTeachToLearn';
import WeTeachToWork from '../ WeTeachToWork';
import { testimony }  from '../../db';
import Modules from '../ Modules';




function HomeContent() {
  const [activeSlide, setActiveSlide] = useState(0);

  const pagination =  () => {
    return (
      <Pagination
        dotsLength={testimony.length}
        activeDotIndex={activeSlide}
        dotStyle={{
            width: 20,
            height: 20,
            borderRadius: 10,
            marginHorizontal: 8,
            backgroundColor: '#2FC18C'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
  );
  }
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.contentTitle}>A porta de entrada para sua carreira em tecnologia</Text>
            <Text  style={styles.contentText}>Construímos nosso currículo com base no que o mercado de trabalho busca em profissionais de tecnologia.
              Com o Modelo de Sucesso Compartilhado, você tem a opção de começar a pagar apenas quando estiver trabalhando.
            </Text>
            <TouchableOpacity style={styles.contentBtn}>
              <Text style={styles.contentBtnText}>Dê o primeiro passo</Text>
            </TouchableOpacity>
            <Image 
              style={styles.contentImg}
              source={require('../../assets/images/principal.png')}
            />
            <View style={styles.working}>
              <Text style={styles.workingText}>
                92% das pessoas formadas já estão trabalhando em até 3 meses após a formatura.
                Esse número é atualizado 90 dias após a conclusão de cada turma.
              </Text>
            </View>
            <Carousel 
              layout={'default'}
              useScrollView={true}
              data={testimony}
              sliderWidth={300}
              itemWidth={280}
              renderItem={CarouselRender}
              onSnapToItem={(index) => setActiveSlide(index) }
            />
            {pagination()}
            <TouchableOpacity style={styles.contentBtnWant}>
              <Text style={styles.contentBtnWantText}>Quero me inscrever</Text>
            </TouchableOpacity>
              <Text style={styles.contentTitleOurWork} numberOfLines={2}>Nosso trabalho é te ajudar a conseguir o seu</Text>
              <Text style={styles.contentTitleOurWorkText}>Ensino de qualidade é ensino completo.</Text>
            <TeachToProgram />
            <WeTeachToLearn />
            <WeTeachToWork />
            <Image style={styles.studentImg}
              source={require('../../assets/images/estudante-trybe.png')}
            />
             <Text numberOfLines={2} style={styles.contentTitleFormation}>Conheça nossa formação</Text>
             <Modules />
        </View> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTitle: {
    width: '80%',
    fontSize: 25,
    fontWeight: '300',
    color: '#525252',
    borderBottomWidth: 2,
    borderBottomColor: '#2FC18C',
    marginTop: 40
  },
  contentTitleOurWork: {
    width: '80%',
    fontSize: 25,
    fontWeight: '300',
    color: '#525252',
    marginTop: 70
  },
  contentText: {
    width: '80%',
    fontSize: 16,
    marginTop: 30,
    fontWeight: '300',
    color: '#525252'
  }, 
  contentTitleOurWorkText : {
    width: '80%',
    fontSize: 16,
    marginTop: 30,
    fontWeight: '300',
    color: '#525252',
  },
  contentBtn: {
    backgroundColor: '#006dfb',
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 150,
    marginTop: 20,
  },
  contentBtnText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#FFF'
  },
  contentBtnWant: {
    backgroundColor: '#006dfb',
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 60,
  },
  contentBtnWantText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#FFF'
  },
  contentImg: {
    marginTop: 80,
    maxWidth: '100%',
    maxHeight: 330
  },
  working: {
    backgroundColor: '#DBDDE3',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 50,
    marginBottom: 50
  },
  workingText: {
    fontSize: 22,
    fontWeight: '300',
    color: '#3E3F41'
  },
  studentImg: {
    marginTop: 80,
    maxWidth: '100%',
    maxHeight: 450
  },
  contentTitleFormation: {
    width: '80%',
    fontSize: 35,
    fontWeight: '300',
    color: '#525252',
    borderBottomWidth: 2,
    borderBottomColor: '#2FC18C',
    marginTop: 90
  }
});

export default HomeContent;
