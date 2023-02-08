function DessertsList(props) {
  const newList = props.data.map(dessert => {
    return {
      dessertName: dessert.name,
      dessertCalories: dessert.calories
    }
  })
  .filter(dessert => {
    return dessert.dessertCalories < 500
  })
  .sort((a,b) => a.dessertCalories - b.dessertCalories)

  return <ul>
    {newList.map(dessert => {
      return <li>{`${dessert.dessertName} - ${dessert.dessertCalories} cal`}</li>
    })}
  </ul>
}

export default DessertsList;