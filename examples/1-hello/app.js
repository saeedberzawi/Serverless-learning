const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    // display only the date without more info => {data}
    // const { data } = await axios.get("/.netlify/functions/1-hello");
    // display the info to see in console.log => data
    // --
    // before we use the => redirects at netlify.toml File
    // const { data } = await axios.get("/.netlify/functions/1-hello");
    // --
    const { data } = await axios.get("/api/1-hello");
    // console.log(data);
    result.textContent = data;
  } catch (error) {
    console.log(error.response);
  }
};

fetchData();
