import React, {useEffect, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import LottieView from 'lottie-react-native';
import styled from 'styled-components';

const Lottie = styled(LottieView)`
  width: 120px;
  height: 120px;
`;

const Intro = (props) => {
  const myLottie = useRef();

  useEffect(() => {
    // setTimeout(function () {
    //   animation.play();
    // }, 2000);
  }, []);

  const startLottie = () => {
    console.log('11111');
    myLottie.current.play();
    setTimeout(() => {
      myLottie.current.pause();
    }, 1000);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Lottie
        ref={myLottie}
        source={require('../assets/lotties/cover.json')}
        // autoPlay
        // loop
        speed={1}
      />
      <Pressable onPress={startLottie}>
        <Text>sadfasdf</Text>
      </Pressable>
    </View>
  );
};

export default Intro;
