# dft(discrete fourier transform) JS

이산 푸리에 변환 입니다. 이거 식 잘못 해석해서 1주일이나 걸렸습니다. 사실 기반 지식 이해하는데 1주일 걸린겁니다. 그냥 고등학교 지식으론 힘드네요. 덕분에 허수가 왜 필요한지 배웠습니다. 고1때 공부좀 잘해놀걸 이라는 생각이 드네요. 만들고 싶은걸 만드는게 이렇게나 어렵습니다. 

이걸 어디가 활용하냐고요? 시간복잡도가 O(n^2) 인데?? 사실 저도 잘 모릅니다. 이렇게 주파수 분해해가지고 특정 극값을 줄인다음 역변환하면 노이즈가 줄어들것 같죠..? 전혀요 손실이 발생합니다. 이거 확인해보려고 미리 Python-FFT 프로젝트를 진행해보았거든요. 정말이지, 수학이 제시하는 세상과 공학이 제시하는 세상이 달라보이는 순간이었습니다.

## 내가 배우려고 만든건데 리드미를 왜 쓰나

이 조직에 있는 이전 플젝 리드미 보시면 됩니다. 만들어보고 싶다! 하면 만듭니다. 한 치의 고민 없이 말이죠. 이런 습관땜에 무턱대고 도전했다가 아직도 완료 못한 플젝이 많습니다. 누군가 그랬죠. 완벽보다, 완료. 근데 그거 아세요? 일론머스크는 완료 다음에 완벽을 이뤄 냈습니다. 핵심은 완료가 먼저다 라는거죠. 

현대의 수 많은 기업과 프로젝트는 완벽만을 고집합니다. 세상이 원하는 디자인은 이럴거야. 저럴거야 하며 말이죠. 근데 대게 언제나 틀렸습니다. 사람들은 아무리 이쁜 디자인을 보아도 쓰지 않으면 이쁜 쓰레기 취급하거든요. 특히나 소프트웨어 개발은 더더욱 그렇죠.

그래서 가설검증이 필요한 겁니다. 새로운 제품을 만들때 간과하는 가설검증. 이 가설검증이 습관화되면 귀찮아서 1개 기능만 런칭하고 반응을 보게 됩니다. 다른 기업들이 이쁜 쓰레기를 만들고 있을때 없어보이는 제품 만들어서 런칭한다고요. 그런 사람들은 핵심이 무엇인지를 아는겁니다. 사람들이 쓸때, 비로소 외형을 업데이트 해야 한다고요.

이 플젝도 마찬가집니다. 직접적으로 사람들이 쓰진 않지만, 내 능력향상을 위해 만듭니다. 


## 그래서요 리드미는 다른 이들을 위한거죠

맞아요. 그래서 설치 과정과 데모 페이지도 만들거에요. 아래 구문을 실행하시면 필요 의존성이 설치됩니다.
 
```
npm install
```

아래 명령은 실행입니다. 당근이쥬

```
npm run start
npm run bundle
```


## 여기에 사용된게 뭐라고요

**푸리에 변환**이요. 그것도 직접 만든, 푸리에 변환.  
React, Typescript. 그냥 기본이죠.