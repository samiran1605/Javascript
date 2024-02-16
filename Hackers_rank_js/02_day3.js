// Day 3: Find the Day
{/* Input Format

Several lines of input containing dates in MM/DD/YYYY format.
The program should end when it encounters .

Output Format

Print the day of the week indicated by the date for each line of input on a separate line.

Sample Input

10/11/2009
11/10/2010
-1
Sample Output

Sunday
Wednesday*/}

d = "11/10/2010"
day = new Date(d.toString())
// console.log(day)
// date = day.getDay()
// console.log(date)
days = ["Sunday", "Monday", "Tudesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
Output = days[day.getDay()]
console.log(Output)


