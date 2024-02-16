const s = '10:10:00PM'

const timefunction = (s) => {
    let hours = s.slice(-2) === "PM" && +s.slice(0, 2) !== 12 ? +s.slice(0, 2) + 12 : s.slice(0, 2)
    let output = s.slice(-2) == "AM" && s.slice(0, 2) == 12 ? s.slice(0, -2).replace(s.slice(0, 2), "00") : s.slice(0, -2).replace(s.slice(0, 2), hours.toString())

    console.log(output)

}

timefunction(s);