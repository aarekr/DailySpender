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

    return (
        <tr>
            <td>{category}</td>
            <td>{calculateCategoryTotal(category)}</td>
        </tr>
    )
}

export default CategoryRow
