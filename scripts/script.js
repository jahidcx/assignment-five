
const allBtn = document.getElementsByClassName("btn-click");

let seatList = [];
for (const btn of allBtn){
    btn.addEventListener('click',function(event){
        const name = event.target.innerText;
        // console.log(name);

        const selectedContainer = document.getElementById('selected-container');

        event.target.setAttribute("disabled", false);
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";

        seatList.push(name);
        console.log(seatList);

        if(seatList.length > 4){
            alert('You cannot buy more that 4 ticket');
            event.target.style.backgroundColor = "#F7F8F8";
            event.target.style.color = "black";
            return;
            
        }

      
        

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = 'Economy';
        p3.innerText = 550;

        selectedContainer.appendChild(p1);
        selectedContainer.appendChild(p2);
        selectedContainer.appendChild(p3);

        updateLeftSeat ();
        updateSelectedSeat ();
        updateTotalPrice ();
        updateGrandTotal ();
    })
}

function updateTotalPrice(){
    
    const totalPrice = getConvertedValue('total-price');
    
    const sum = totalPrice + 550;
    document.getElementById('total-price').innerText = sum;
}


function updateGrandTotal (status){
  const  newTotal = getConvertedValue('total-price')

    if(status == undefined){
        
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = newTotal;
    }
    else{
        const couponCode = document.getElementById('coupon').innerText;

        if(couponCode == 'NEW15'){
            const discount = newTotal*0.15;
            const discountedPrice = newTotal - discount ;
            document.getElementById("grand-total").innerText = discountedPrice;
        }
        else if(couponCode == 'COUPLE20'){
            const discount2 = newTotal*0.20;
            const discountedPrice2 = newTotal - discount2 ;
            document.getElementById("grand-total").innerText = discountedPrice2;
        }
        else{
            alert('Please Enter Valid Coupon');
        }
    }

}


function updateLeftSeat (){
    const leftSeat = getConvertedValue('left-seat');
    const updateLeftSeat = leftSeat - 1;
    document.getElementById('left-seat').innerText = updateLeftSeat; 
}

function updateSelectedSeat (){
    const selectedSeat = getConvertedValue('selected-seat');
    const updateSelectedSeat = selectedSeat + 1;
    document.getElementById('selected-seat').innerText = updateSelectedSeat; 
}


function getConvertedValue (id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice; 
}


function confirmPurchase (){
    hideElementById('header-part');
    hideElementById('coupon-section');
    hideElementById('ticket-section');

    showElementById('confirm-section');

}

function goHome (){
    showElementById('header-part');
    showElementById('coupon-section');
    showElementById('ticket-section');

    hideElementById('confirm-section');

}