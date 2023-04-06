import { objects } from "../../../data/objects";

function PopularObj() {
  const result = objects.map((element, index) => {
    return (
      <div key={index}>
        <img src={element.img} alt="kartinka"></img>
        <h1>{element.title}</h1>
      </div>
    );
  });

  return (
    <div>
      <h1>Популярные туристические объекты</h1>
      <div>{result}</div>
    </div>
  );
}

export default PopularObj;
