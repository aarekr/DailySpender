function DayTable({ expenses }) {
    const getModifiedDate = (expense) => {
        const dateSplit = expense.createdAt.split('-')
        return dateSplit[2].split('T')[0] + '.' + dateSplit[1] + '.' + dateSplit[0]
    }

    const expensesPerDay = () => {
        let data = {}
        for (let i=0; i<expenses.length; i++) {
            data[getModifiedDate(expenses[i])] = 0
        }
        for (let i=0; i<expenses.length; i++) {
            data[getModifiedDate(expenses[i])] += Number(expenses[i].amount)
        }
        return data
    }

    return (
        <table border="1">
            <thead>
                <tr>
                    <th width="150">Date</th>
                    <th width="100">Sum</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(expensesPerDay()).map(([date, amount]) => (
                    <tr key={date}>
                        <td>{date}</td>
                        <td>{amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DayTable
