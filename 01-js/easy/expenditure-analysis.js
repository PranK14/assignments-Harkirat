/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // const list = {}
  // transactions.forEach((transaction) => {
  //   const { category, price } = transaction

  //   if (!list[category]) {
  //     list[category] = price
  //   } else {
  //     list[category] += price
  //   }
  // })

  // const result = []
  // Object.keys(list).forEach((category) => {
  //   result.push({ category: category, totalSpent: list[category] })
  // })

  // return result

  const result = []

  for (let i = 0; i < transactions.length; i++) {
    let check = result.find(
      (item) => item.category === transactions[i].category
    )

    if (check) {
      check.totalSpent += transactions[i].price
    } else {
      result.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      })
    }
  }
  return result
}

module.exports = calculateTotalSpentByCategory
