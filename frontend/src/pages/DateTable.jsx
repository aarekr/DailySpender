function DayTable({ expenses }) {
    const expensesPerDay = () => {
        let data = {}
        for (let i=0; i<expenses.length; i++) {
            const dateSplit = expenses[i].createdAt.split('-')
            const dateModified = dateSplit[2].split('T')[0] + '.' + dateSplit[1] + '.' + dateSplit[0]
            console.log("---> ", dateModified, expenses[i].amount, typeof(expenses[i].amount))
            data[dateModified] += Number(expenses[i].amount)
            console.log("data[dateModified]: ", data[dateModified])
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
