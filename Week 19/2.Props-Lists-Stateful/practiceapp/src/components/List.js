import React from "react";

function List({ groceries }) {
  console.log(groceries);
  // const notPurchased = groceries.filter((grocery) => !grocery.purchased);

  const getgroceryContent = groceries => {
    let content = [];
    for (let i = 0; i < groceries.length; i++) {
      const item = groceries[i];
      content.push(<li key={item.id}>{item.name}</li>);
    }
    return content;
  };
  return <ul>{getgroceryContent(groceries)}</ul>;

  // return (
  //   <ul className='list-group'>
  //     {notPurchased.map((grocery) => (
  //       <li key={grocery.id}>{grocery.name}</li>
  //     ))}
  //     {groceries.filter((grocery) => !grocery.purchased).map((grocery) => (
  //       <li key={grocery.id}>{grocery.name}</li>
  //     ))}
  //   </ul>
  // );
}

export default List;
