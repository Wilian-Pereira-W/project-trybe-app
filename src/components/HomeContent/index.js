import React, { useState, useContext } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import CarouselRender from '../Carousel';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import TeachToProgram from '../TeachToProgram';
import WeTeachToLearn from '../ WeTeachToLearn';
import WeTeachToWork from '../ WeTeachToWork';
import Modules from '../ Modules';
import DuringFormation from '../DuringFormation';
import CarouselCompany from '../CarouselCompany';
import { PaginationTestimony, PaginationCompany } from '../Pagination';
import { testimony, company }  from '../../db';
import { MenuContext } from '../../contexts/MenuContext';
import Menu from '../Menu';
import TalkingAboutUs from '../ TalkingAboutUs';


function HomeContent() {
  const { menuVisible} = useContext(MenuContext);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlideCompany, setActiveSlideConpany] = useState(0);
  

  return (
    <View>
      {menuVisible && (<Menu />)}
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
            {PaginationTestimony(testimony, activeSlide)}
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
             <DuringFormation />
             <View style={styles.contentCompany}>
                <Text style={styles.contentTitleCompany}>Empresas que estão de olho em Trybers</Text>
             </View>
             <Carousel 
              layout={'default'}
              useScrollView={true}
              data={company}
              sliderWidth={420}
              itemWidth={420}
              renderItem={CarouselCompany}
              onSnapToItem={(index) => setActiveSlideConpany(index) }
            />
              {PaginationCompany(company, activeSlideCompany)}
              <View style={{ backgroundColor: '#FFF', width: '100%',}}>
                <TouchableOpacity style={styles.contentCompanyBtn}>
                  <Text style={styles.contentCompanyBtnText}>Quero ser empresa parceita</Text>
                </TouchableOpacity>
              </View>
              <TalkingAboutUs />
              <Image style={styles.footerImg}
                source={{uri: 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61a6362ac5e4ff25cbd9aca8_footer.png'}}
              />
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>
                  A sua conquista é a nossa. A Trybe só ganha quando você começar a ganhar.
                </Text>
                <Text style={styles.footerText}>
                Confiamos tanto no seu sucesso profissional que você não precisa pagar nada até estar trabalhando e com uma remuneração de, pelo menos, R$ 3.000,00.
                </Text>
                <TouchableOpacity style={styles.footerBtn}>
                  <Text style={styles.footerBtnText}>Saber mais sobre o Modelo</Text>
                </TouchableOpacity>
              </View>
        </View> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
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
  },
  contentCompany:{
    backgroundColor: '#FFF',
    width: '100%',
    height: 200,
  },
  contentTitleCompany: {
    width: '80%',
    fontSize: 40,
    fontWeight: '300',
    color: '#525252',
    borderBottomWidth: 2,
    borderBottomColor: '#2FC18C',
    marginTop: 40,
    marginLeft: 50
  },
  contentCompanyBtn:{
    backgroundColor: '#006dfb',
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 80
  },
  contentCompanyBtnText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#FFF'
  },
  footer: {
    width: '100%',
    backgroundColor: '#41197f',
    alignItems: 'center'
  },
  footerImg: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: 600,
    height: 600,
  },
  footerTitle: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '300',
    textAlign: 'left',
    paddingLeft: 20,
    color: '#fff',
    marginTop: 50
  },
  footerText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '300',
    textAlign: 'left',
    paddingRight: 50,
    paddingLeft: 50,
    marginTop: 30,
    marginBottom: 30,
    color: '#fff',
  },
  footerBtn: {
    backgroundColor: '#006dfb',
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 150,
    marginTop: 20,
    marginLeft: 90
  },
  footerBtnText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#FFF'
  },
});

export default HomeContent;
