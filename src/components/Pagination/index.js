import { Pagination } from 'react-native-snap-carousel';

export  const PaginationTestimony = (testimony, activeSlide) => {
  return (
      <Pagination
        dotsLength={testimony.length}
        activeDotIndex={activeSlide}
        style={{backgroundColor: 'red'}}
        dotStyle={{
            width: 20,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 8,
            backgroundColor: '#2FC18C'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
            backgroundColor: '#3E3F41',
            width: 20,
            height: 20,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
);
}

export  const PaginationCompany = (company, activeSlideCompany) => {
  return (
    <Pagination
      dotsLength={company.length}
      activeDotIndex={activeSlideCompany}
      dotStyle={{
          width: 10,
          height: 5,
          borderRadius: 10,
          backgroundColor: '#2FC18C'
      }}
      inactiveDotStyle={{
          // Define styles for inactive dots here
          backgroundColor: '#3E3F41',
          width: 20,
          height: 20,
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
    
);
}