// Calculates and returns total spending per category
// Displayed in Expenses per spending category section of the Dashboard

function CategoryRow({ expenses, category }) {
    function calculateCategoryTotal(category) {
        let categorySum = 0;
        for (let i=0; i<expenses.length; i++) {
            if (expenses[i].category === category) {
                categorySum += expenses[i].amount
            }
        }
        return categorySum
    }

    function calculateTotalSpending() {
        let totalSum = 0;
        for (let i=0; i<expenses.length; i++) {
            totalSum += expenses[i].amount
        }
        return totalSum
    }

    return (
        <tr>
            <td>{category}</td>
            <td>{calculateCategoryTotal(category)}</td>
            <td>{(100 * calculateCategoryTotal(category) / calculateTotalSpending()).toFixed(2)}%</td>
        </tr>
    )
}

export default CategoryRow
