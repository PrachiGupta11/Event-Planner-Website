
async function CallAPIdata() {

    
    let response = await fetch("../Data_Api/Data.json");
    let result = await response.json();

    let decorType=localStorage.getItem('decorationType')
    console.log(decorType)

    const filteredItems=result.filter(item=>item.type===decorType)
    console.log(filteredItems)
    document.querySelector(".box-container").innerHTML = filteredItems.map((item) => {
        return `
              <div class="box">
                <div class="image" >
                  <img src="${item.image}" alt="${item.heading}" />
                </div>
                <h3>${item.heading}</h3>
                <p class="end">INR ${item.price}</p>
                <button class="btn end" onclick='saveDetails(${JSON.stringify(item)})'>Add to cart</button>
                <br> <br>
                <label class='msg' style="font-size: 18px; color: white;"> </label>
              </div>        
            
        `;
    }).join("");

}
function saveDetails(detail)
{
  localStorage.setItem("selected-decoration",JSON.stringify(detail))
  const button = event.target;
  const box = button.closest('.box');
  const allBoxes = document.querySelectorAll('.box');

  allBoxes.forEach(b => {
      b.querySelector('.msg').innerText = '';
  });

  box.querySelector('.msg').innerText = 'Add to cart successfully';
}
CallAPIdata();
// document.addEventListener("DOMContentLoaded", CallAPIdata);

function searchBooking(){
  const decorationType=document.getElementById('decoration-type-select').value
  localStorage.setItem('decorationType',decorationType)
  CallAPIdata()
}

