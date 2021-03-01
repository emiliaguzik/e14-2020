const getInputValues = () => {
  const shapeType = parseInt(document.querySelector("#shape").value, 10);
  const r = parseInt(document.querySelector("#R").value, 10);
  const g = parseInt(document.querySelector("#G").value, 10);
  const b = parseInt(document.querySelector("#B").value, 10);
  return { shapeType, r, g, b };
};

const getShape = ({ shapeType }) => {
  let shape;
  if (shapeType === 1) {
    shape = "miś";
    return shape;
  } else if (shapeType === 2) {
    shape = "żabka";
    return shape;
  } else if (shapeType === 3) {
    shape = "serce";
    return shape;
  } else {
    shape = "Podałeś niewiłaściwy kształt";
    return shape;
  }
};

const assingShape = (shape) => {
  document.querySelector(".shape").innerHTML = "";
  document.querySelector(".shape").innerHTML = "Zamówiłeś żelka: " + shape;
};

const getRGB = ({ r, g, b }) => {
  if ((r, g, b > 255 || r, g, b < 0)) {
    document.querySelector(".colorPicker").innerHTML = "Podaj poprawną wartość";
  } else {
    document.querySelector(".colorPicker").style.backgroundColor =
      "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

const calculate = () => {
  const getValues = getInputValues();
  const shapeValue = getShape(getValues);
  assingShape(shapeValue);
  getRGB(getValues);
};
