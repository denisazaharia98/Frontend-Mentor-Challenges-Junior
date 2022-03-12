const result = document.querySelector(".result");
const button = document.querySelector("button");
const introMessage = document.querySelector(".intro");
const id = document.querySelector(".id");

/* add the id of advice, from API, in the page */
const addId = async () => {
  const idNumber = await getDataAPI();
  id.append("Advice #");
  id.append(idNumber[0]);
};

/* add the advice text from the API, in the page */
const addAdvice = async () => {
  const adviceText = await getDataAPI();
  result.append('"');
  result.append(adviceText[1]);
  result.append('"');
};

/* get the data from API with axios */
const getDataAPI = async () => {
  try {
    const res = await axios.get("https://api.adviceslip.com/advice");
    const advice = res.data.slip.advice;
    const id = res.data.slip.id;
    let valuesAPI = [];
    valuesAPI.push(id);
    valuesAPI.push(advice);
    return valuesAPI;
  } catch (e) {
    return "No advice available. Sorry!";
  }
};

/* after click, the advice will appear and the intro will disappear; 
the previous advice will disappear */
button.addEventListener("click", (e) => {
  introMessage.innerText = "";
  addId();
  id.innerText = "";
  addAdvice();
  result.innerText = "";
});
