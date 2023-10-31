// 1. 주문 번호 생성하기
function placeOrder(menu, goCook) {
  setTimeout(() => {
    const orderId = Math.floor(Math.random() * 1000) + 1;
    console.log(`주문이 생성되었습니다. ${menu} 요리 주문 ID: ${orderId}`);
    goCook({ orderId, menu })
  }, Math.random() * 2000);
}

// 2. 실제로 주문하기
function cook(order, goDelivery) {
  setTimeout(() => {
    const isCookingSuccessful = Math.random() < 0.8;
    if (isCookingSuccessful) {
      // 요리를 성공했다!
      // 다음에 할 일: 배달
      goDelivery()
    } else {
      console.log(`주문 실패: ${order.menu} 요리 실패, 다시 주문해주세요.`);
    }
  },  Math.random() * 2000);
}

function deliver(order, orderComplete) {
  setTimeout(() => {
    const isDeliverySuccessful = Math.random() < 0.9;
    if (isDeliverySuccessful) {
      orderComplete(`주문 성공: ${order.menu} 배달 완료!`)
    } else {
      console.log(`주문 실패: ${order.menu} 배달 실패, 다시 주문해주세요.`);
      return false
    }
  },  Math.random() * 2000);
}

// 배달 시작
function processOrder(orderDetails) {
	// 1. 주문 번호 생성
  placeOrder(orderDetails.menu, (order) => {
    console.log
  })
  // 그냥 변수 선언해서 넣으면 cook 함수의 return 값을 기다리지 않는다 
  // const flag = cook(ordefDetails)
  // consoloe.log(flag)   // undefined
  cook(orderDetails)
  deliver(orderDetails)
}

const orderDetailsList = [
  { menu: "치킨" },
  { menu: "피자" },
  { menu: "샐러드" },
];

orderDetailsList.forEach((element) => {
  processOrder(element);
});
