// 동물병원
var requestURL =
  "https://openapi.gg.go.kr/Animalhosptl?KEY=00bfb12c126b44e387a7f0ef71a51ee1&type=json&pSize=1000";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

// 동물 보호소
var requestURL1 =
  "https://openapi.gg.go.kr/OrganicAnimalProtectionFacilit?KEY=54a920236f3d4cd4bf0024b36c258e3c&type=json&pSize=1000";
var request1 = new XMLHttpRequest();
request1.open("GET", requestURL1);
request1.responseType = "json";
request1.send();

//fetch 하는법

// 마커를 표시할 위치와 title 객체 배열입니다
var positions = [
  {
    title: "카카오",
    latlng: new kakao.maps.LatLng(33.450705, 126.570677),
  },
];

// 지도에 표시된 마커 객체를 가지고 있을 배열입니다
var markers = [];

var map;

request.onload = function () {
  var responseMap = request.response;
  // var mapsvalue = JSON.stringify(responseMap,null,2);
  // console.log(mapsvalue);
  var maps = responseMap;
  // console.log(maps.Animalhosptl[1].row[1].REFINE_WGS84_LAT);
  // console.log(maps.Animalhosptl[1].row[1].REFINE_WGS84_LOGT);

  for (var i = 0; i < maps.Animalhosptl[1].row.length; i++) {
    var vals = {
      title: maps.Animalhosptl[1].row[i].BIZPLC_NM,
      latlng: new kakao.maps.LatLng(
        maps.Animalhosptl[1].row[i].REFINE_WGS84_LAT,
        maps.Animalhosptl[1].row[i].REFINE_WGS84_LOGT
      ),
    };

    positions.push(vals);
  }

  const array = maps.Animalhosptl[1].row;

  const resultArr = array.map((x, idx) => {
    return {
      title: x.BIZPLC_NM,
      lating: new kakao.maps.LatLng(x.REFINE_WGS84_LAT, x.REFINE_WGS84_LOGT),
    };
  });

  position = [...positions, ...resultArr];

  makeMaps();
};

function makeMaps() {
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

  map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // 마커 이미지의 이미지 주소입니다
  var imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new kakao.maps.Size(24, 35);

  // 마커를 생성하고 지도위에 표시하는 함수입니다
  for (var i = 0; i < positions.length; i++) {
    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    markers.push(marker);
  }
}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers() {
  setMarkers(map);
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers() {
  setMarkers(null);
}
