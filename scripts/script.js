
window.onload = function() {

    var cartItems = 0;
    var totalPrice = 0;

    //  object for all brands and its price
    var brands = [
        {
            brand: "gum1",
            price: 1.50
        },
        {
            brand : "gum2",
            price : 1.00
        },
        {
            brand:"gum3",
            price:1.75
        },
        {
            brand:"gum4",
            price:0.50
        }
    ];
    
    var clear = function(){
        cartItems = 0;
        totalPrice = 0;

        document.getElementById('cartItems').innerHTML = cartItems;
        document.getElementById('totalPrice').innerHTML = totalPrice;
    }

    var addPrice = function(brandName) {
        for(var i=0; i<=3; i++) {
            if(brands[i].brand == brandName) {
                cartItems = cartItems + 1;
                totalPrice = totalPrice + brands[i].price;
                
                document.getElementById('cartItems').innerHTML = cartItems;
                document.getElementById('totalPrice').innerHTML = totalPrice;
            }
        }
    }

    // click event for each item
    document.getElementById("gum1").addEventListener("click", function() {
        addPrice("gum1");
    });

    document.getElementById("gum2").addEventListener("click", function() {
        addPrice("gum2");
    });

    document.getElementById("gum3").addEventListener("click", function() {
        addPrice("gum3");
    });

    document.getElementById("gum4").addEventListener("click", function() {
        addPrice("gum4");
    });

    // click event for clear button
    document.getElementById("cleanBtn").addEventListener("click", function() {
        clear();
    });

}