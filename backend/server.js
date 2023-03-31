const express = require('express');
const cors = require('cors');

const PORT = 4000;
const server = express();

server.use(cors());

server.get('/', (req, res) => {
  console.log('hi');
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  res.status(200).send(JSON.stringify(pororoObjArr));
});

server.listen(PORT, () => {
  console.log(`데이터 통신용 서버가 ${PORT}번에서 실행 중입니다!`);
});
