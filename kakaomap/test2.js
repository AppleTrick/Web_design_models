
// 동물 병원 API 가지고 오기
// var requestURL = "https://openapi.gg.go.kr/Animalhosptl?KEY=00bfb12c126b44e387a7f0ef71a51ee1&type=json&pSize=1000";
// var request = new XMLHttpRequest();
// request.open('GET',requestURL);
// request.responseType = 'json';
// request.send();

let Animalhospital1;
let Animalhospital2;
let AnimalProtection

async function fetchURL(){
    Animalhospital1 = await fetch('https://openapi.gg.go.kr/Animalhosptl?KEY=00bfb12c126b44e387a7f0ef71a51ee1&pIndex=1&type=json&pSize=1000')
    .then(function(res) {
      return res.json();
    });

   

    Animalhospital2 = await fetch('https://openapi.gg.go.kr/Animalhosptl?KEY=00bfb12c126b44e387a7f0ef71a51ee1&pIndex=2&pSize=1000&type=json')
    .then(function(res){
      return res.json();
    });

    AnimalProtection = await fetch('https://openapi.gg.go.kr/OrganicAnimalProtectionFacilit?KEY=00bfb12c126b44e387a7f0ef71a51ee1&pIndex=1&pSize=1000&type=json')
    .then(function(res){
      return res.json();
    });    
}

// var ;
// var Animalhospital2;

async function start(){
    await fetchURL();
    console.log(AnimalProtection.OrganicAnimalProtectionFacilit[1].row[0])
    console.log(AnimalProtection.OrganicAnimalProtectionFacilit[1].row[0].ENTRPS_NM)
    console.log(AnimalProtection.OrganicAnimalProtectionFacilit[1].row[0].REFINE_WGS84_LAT)
    console.log(AnimalProtection.OrganicAnimalProtectionFacilit[1].row[0].REFINE_WGS84_LOGT)
}

start();
// fetch('https://openapi.gg.go.kr/Animalhosptl?KEY=00bfb12c126b44e387a7f0ef71a51ee1&pIndex=1&type=json&pSize=1000')
//   .then(function(res) {
//     return res.json();
//   }).then(function(res) {
//     Animalhospital1 = res;
//   })
  
// fetch('https://openapi.gg.go.kr/Animalhosptl?KEY=00bfb12c126b44e387a7f0ef71a51ee1&pIndex=2&pSize=1000&type=json')
//   .then(function(res){
//     return res.json();
//   }).then(function(res){
//     Animalhospital2 = res;
//   })






// request.onload = function() {
//     var responseMap = request.response;
//     // var mapsvalue = JSON.stringify(responseMap,null,2);
//     // console.log(mapsvalue);

//     var maps = responseMap;
//     console.log(maps.Animalhosptl);
//     console.log(maps.Animalhosptl[1].row.length);
//     console.log(maps.Animalhosptl[1].row[1].BIZPLC_NM);
//     console.log(maps.Animalhosptl[1].row[1].REFINE_WGS84_LAT);
//     console.log(maps.Animalhosptl[1].row[1].REFINE_WGS84_LOGT);
// }