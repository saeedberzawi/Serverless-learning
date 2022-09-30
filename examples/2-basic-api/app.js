const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      "https://serverless-functions-br.netlify.app/api/2-basic-api"
    );
    const products = data
      .map((product) => {
        const {
          image: { url },
          name,
          price,
        } = product;
        return ` <article class="product">
       <img
         src="${url}"
         alt="${name}"
       />
       <div class="info">
         <h5>${name}</h5>
         <h5 class="price">$${price}</h5>
       </div>
     </article>`;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h2>There was an error. Please try again later</h2>`;
    console.log(error.response);
  }
};

fetchData();
