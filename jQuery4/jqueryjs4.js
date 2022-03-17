
var ArrayProducts = [

    { name: "Bike 1",image: "./img/bike1.jpg",price:7790,category: ['Bike'] },
    { name: "Book 1",image: "./img/book1.jpg",price: 205,category: ['Book'] },
    { name: "Phone 1",image: "./img/phone1.jpg",price: 3050,category: ['phone'] },
    {name: "Shirt 1",image: "./img/shirt1.jpg",price: 80,category: ['Shirt'] },

  {name: "T-shirt 1",image: "./img/t-shirt1.jpg",price: 300,category: ['T-shirt']},
   {name: "Shirt 3",image: "./img/shirt3.jpg",price: 200,category: ['Shirt'] },
   {name: "T-shirt 2",image:"./img/t-shirt2.jpg",price: 500,category: ['T-shirt']},
  
   { name: "Bike 2",image: "./img/bike2.jpg",price: 8880,category: ['Bike'] },
   { name: "Book 2",image: "./img/book2.jpg",price: 305,category: ['Book']},
   { name: "Phone 2", image: "./img/phone2.png", price: 3050,category: ['phone'] },
   {name: "Book 3",image: "./img/book3.png",price: 305,category: ['Book']},
   {name: "T-shirt 3",image: "./img/t-shirt3.jpg",price: 205,category: ['T-shirt']},

   {name: "Bike 3",image: "./img/bike3.jpeg",price: 5570,category: ['Bike']},
  {name: "Phone 3",image: "./img/phone3.jpg",price: 3050,category: ['phone'] },
   {name: "Shirt 2",image: "./img/shirt2.jpeg",price: 50,category: ['Shirt'] },
 ];
 let arr = [];

 $(document).ready(function () {
   totalData();

    $(".btn").click(function () {

      let lenth = $(this).attr("data-size");
       $(this).toggleClass("all selected");


       if (!arr.includes(lenth)) {
          arr.push(lenth);
          ItemsFiltered();

       }
       else {
          arr = arr.filter(function (elem) {
             return elem !== lenth;
          });
          ItemsFiltered();
       }
    });
 });
 function totalData() {
    $("#objPoduct").empty();
    var sum = 0;
    for (var i = 0; i < ArrayProducts.length; i++) {

       var item_content = `<div class="card_cont" ><div id="box1"> <p class=name>${ArrayProducts[i].name}</p> <img src= ${ArrayProducts[i].image} > <p class=price>Rs.${ArrayProducts[i].price} </p></div></div>`;
       $("#objPoduct").append(item_content);
       sum = sum + ArrayProducts[i].price;
      //console.log(sum);
    }
    document.getElementById('amount').innerHTML = sum;
 }
 function ItemsFiltered() {
    $("#objPoduct").empty();
    var totalItem = 0;

    if (!arr.length) {
      totalData();
       return;
    }
    for (var i = 0; i < ArrayProducts.length; i++) {
       // for data categori data
       if (arr.some((val) => ArrayProducts[i]["category"].includes(val))) {
          var item_content = `<div class="card_cont" > <div id="box1"><p class=name>${ArrayProducts[i].name}</p><img src= ${ArrayProducts[i].image} ><p class=price>Rs.${ArrayProducts[i].price} </p></div></div>`;
          totalItem= totalItem+ ArrayProducts[i].price;
          //console.log(totalItem);
          $("#objPoduct").append(item_content);
       }
    }
    document.getElementById('amount').innerHTML = totalItem;
 }