
import React, { useState, useEffect } from 'react';
import axios from 'axios';
  

function About() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async () => {
  try {

  
  const response = await axios.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=wrT7jBTupPORDuzliuyX%2BIvp56D49VObOzqHO1Hs%2BigehQFhpMGwjct4ND%2FLudBKqINA7SF1l%2FzWr8KtPSPOnA%3D%3D&numOfRows=10&pageNo=1&base_date=20230324&base_time=0800&nx=60&ny=128&dataType=json', {
    });
    if (response) setData(response.data);
    console.log(response.data)
  } catch (e) {
    setError(e);
  }
};
    
    useEffect(() => {
      fetchData();
    }, []);    

  if (!data) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>
  return (
      <div>
        <h1>국민대학교 아침 단기 기상 예보</h1>
        <h3>성북구 정릉 3동</h3>
        <p>1시간 기온 : {data.response.body.items.item[0].fcstValue}</p>
        <p>풍속(동서성분) : {data.response.body.items.item[1].fcstValue}</p>
        <p>풍속(남북성분) : {data.response.body.items.item[2].fcstValue}</p>
        <p>풍향 : {data.response.body.items.item[3].fcstValue}</p>
        <p>풍속 : {data.response.body.items.item[4].fcstValue}</p>
        <p>하늘 상태 : {data.response.body.items.item[5].fcstValue}</p>
        <p>강수 형태 : {data.response.body.items.item[6].fcstValue}</p>
        <p>강수 확률 : {data.response.body.items.item[7].fcstValue}</p>
        <p>파고 : {data.response.body.items.item[8].fcstValue}</p>
        <p>1시간 강수량 : {data.response.body.items.item[9].fcstValue}</p>
        
      </div>
    );
  }

  export default About;