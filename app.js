

// getting all products through api
function allProducts() {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const product = {
                    img: element.image_link,
                    price: element.price,
                    name: element.name,
                    description: element.description,
                    brand: element.brand,
                    rating: element.rating,
                }
                singleProduct(product)
            });
        })
}
allProducts();


const singleProduct = (param) => {
    const { img, price, name, description, brand, rating } = param;
    const div = document.createElement('div');

    div.innerHTML = `<div id="card" class="card bg-[#d6d6d6] p-4  rounded-md shadow-xl text-sm cursor-pointer hover:scale-110 duration-200">
      <figure><img src=${img} alt="Shoes" class="mx-auto mb-2"/></figure>
      <div class="card-body">
            <p>${name}</p>
            <div class="flex justify-between my-1">
                <p class="inline px-2 py-1 bg-red-500 rounded text-white font-semibold">$ ${price}</p>
                <p>Rating: ${rating} </p>
            </div>
            
      </div>
  </div>`
    document.getElementById('products').appendChild(div)

    document.getElementById('card').addEventListener('click', function () {
        modal(param)
    })
}


const modal = (param) => {
    const { img, price, name, description, brand, rating } = param;
    console.log("valo")
}
