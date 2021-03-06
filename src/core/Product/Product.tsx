import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { BuyWithThisProduct } from './BuyWithThisProduct/BuyWithThisProduct';
import { ProductCard } from './ProdcutCard/ProductCard';
import { AnchorsContent } from './AnchorsContent/AnchorsContent';
import { HeaderBackground } from '../components/HeaderBackground';

export function Product() {
  return (
    <>
      <Header 
        title={'Milk & Cheese'}
        toScreen='Cart'
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{alignItems: 'center'}}>
          <HeaderBackground />
          <ProductCard />
          <BuyWithThisProduct />
          <AnchorsContent />
        </View>
      </ScrollView>
    </>
  );
}