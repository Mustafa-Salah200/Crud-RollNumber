import { useState } from "react";
import INPUT_FORM from "./component/InputForm";
import UpdateData from "./component/UpdateData";
import TABLE from "./component/TABLE";

let arr = [];
if (window.localStorage.getItem("arr_of_data")) {
  arr = JSON.parse(window.localStorage.getItem("arr_of_data"));
}
const App = () => {
  const [arrayOfData, setArrayOfData] = useState(arr || []);
  const [update, setUpdate] = useState(false);
  const [updateItem, setUpdateItem] = useState();

  function submitData(data) {
    setArrayOfData((item) => [...item, data]);
    window.localStorage.setItem(
      "arr_of_data",
      JSON.stringify([...arrayOfData, data])
    );
  }
  function DeleteItem(id) {
    const newArray = arrayOfData.filter((item) => +item.id !== id);
    setArrayOfData(newArray);
    window.localStorage.setItem("arr_of_data", JSON.stringify(newArray));
  }
  function UpdateItem(item) {
    const newArray = arrayOfData.map((ele) => {
      if (ele.id === item.id) {
        return {
          ...item,
          id: ele.id,
        };
      }
      return ele;
    });
    setArrayOfData(newArray);
    window.localStorage.setItem("arr_of_data", JSON.stringify(newArray));
    setUpdate(false);
  }
  function GetUpdate(item) {
    setUpdate(true);
    setUpdateItem(item);
  }
  return (
    <div className="container">
      <div className="title">
        <h1>CURD APPLICATION</h1>
      </div>
      {update ? (
        <UpdateData UpdateItem={UpdateItem} item={updateItem} />
      ) : (
        <INPUT_FORM submitData={submitData} />
      )}

      <TABLE GetUpdate={GetUpdate} data={arrayOfData} DeleteItem={DeleteItem} />
    </div>
  );
};

export default App;
