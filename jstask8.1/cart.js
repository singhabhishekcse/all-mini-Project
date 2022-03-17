     var price = 0;
      var obj = "";
      var cart = [
{ 
  name: "Shirt 1",
   img: "./img/shirt1.jpg",
    price: 80,
    quant: 0,
   },
{
  name: "Shirt 2",
  img: "./img/shirt2.jpeg",
  price: 50,
  quant: 0,
},
{
   name: "Shirt 3",
    img: "./img/shirt3.jpg",
    price: 200,
     quant: 0,
     },
{
   name: "T-shirt 1",
     img: "./img/t-shirt1.jpg",
     price: 300,
      quant: 0,
     },
{ 
  name: "T-shirt 2", 
   img:"./img/t-shirt2.jpg",
   price: 500,
    quant: 0,
  },
{
  name: "T-shirt 3",
  img: "./img/t-shirt3.jpg",
  price: 205,
  quant: 0,
},
      ];
      var a = 0;
for ( a  in cart) {

document.write("<div class='image'>");
obj +="<div style='display: inline-block'><div><h3> " + cart[a].name + " </h3></div>";
obj += "<div><img src= "+cart[a].img +" />";
obj += "</div><div><p> Price: &#x24 " + cart[a].price + "</p> </div>";
obj +='<div><button class="cart1" onclick="add(' +a +')">Add To Cart</button></div></div>';

      }



      document.write(obj);
       document.write("</div>");
      function add(id) {
        cart[id].totalprice = cart[id].price * (cart[id].quant + 1);
        //remove dublicity
        cart[id].quant = cart[id].quant + 1;
        
        addtocart();
      }
      function remove(id) {
        cart[id].totalprice = 0;
        cart[id].quant = 0;
       // console.log( cart[id].totalprice);
        addtocart();
      }
      function changeQuantity(value, id) {
        if (value < 0) value = 0;
        cart[id].totalprice = cart[id].price *parseInt(value);
        cart[id].quant = parseInt(value);
        addtocart();
      }



      function addtocart() {
        var data = "";
        var price = 0;
        var a = 0;
        for (a = 0; a < cart.length; a++) {
          var j = Object.keys(cart[a]).includes("totalprice");
          if (j && cart[a].totalprice > 0) {
            price += cart[a].totalprice;
          }
        }
for (a = 0; a < cart.length; a++) {
var j = Object.keys(cart[a]).includes("totalprice");
          if (j && cart[a].totalprice > 0) {
           
data += "<tr>";
data +='<td><img class="img" src="' +cart[a].img +'" /></td><td>' +cart[a].name +"</td><td> Price :&#x24;"+" " +cart[a].price +
'</td><td><input type="number" value="' +cart[a].quant 
+'" onblur="changeQuantity(this.value,' +a +')" /></td><td><button onclick="remove(' +a+')">remove</button></td>';
data += "</tr>";
          }
        }
        var row1 = "";
        var row2 = "";
        var row3 = "";
        if(data.length > 0) {
          row1 += "<table class='Table'><tr><th>Image</th><th>Name</th><th>Price</th><th>Quantity</th><th>Remove</th></tr>";
         row2 += "<tr><td>Total Price: &#x24 ";
         row3 += "</td></tr></table><br /><button class='btn' onclick='popUp()'>Purchase</button>";
        } 
        else {
          row1 += "";
         row2 += "";
         row3 += "";
          data = "";
          price = "";
        }
document.getElementById("d1").innerHTML =row1+data +row2+price +row3;
        }

      function popUp() {
        var a = confirm("Thank you for Shopping");
        if(a) {
          window.location.href = 'cart.html';
        }
      }
    
    