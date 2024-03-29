let goods = []
console.log(parseInt('dd'))

for (let index = 1; index <= 30; index++) {
    goods.push([`Element${index}`, `Decription${index}`, parseInt(`${Math.floor(Math.random() * goods.length + 1)}0`)])
}

console.log(goods)

while (true) {
    let input = prompt(
        `For read all goods write - READ
    For delete goods write - DELETE
    For CHANGE goods write - CHANGE
    For ADD goods write - ADD
    For SORTING goods write - SORT
    For STOP write - STOP
    `
    )

    if (input === 'STOP') {
        break
    } else if (input === 'DELETE') {
        let deletedElement = prompt('Write name of element tha you want delete')
        let detectedElement = goods.findIndex((item) => item[0] === deletedElement)
        console.log(detectedElement)
        goods.splice(detectedElement, 1)
        console.log(goods)
    } else if (input === 'CHANGE') {
        let changedElement = prompt('Write name of element tha you want change')
        let detectedElement = goods.findIndex((item) => item[0] === changedElement)
        let changedItem = prompt('Write information of element tha you want change')
        if (changedItem === 'price') {
            let price = prompt('Write price of element tha you want change')
            goods[detectedElement][2] = price
            console.log(goods)
        } else if (changedItem === 'description') {
            let description = prompt('Write description of element that you want change')
            goods[detectedElement][1] = description
            console.log(goods)
        } else {
            console.log('wrong')
        }
    } else if (input === 'ADD') {
        let addedElement = prompt('Write information of element that you want add Example "name descriptiopn price"').split(' ')
        // let include
        let el = goods.some((item) => item[0] === addedElement[0])
        // for (let index = 0; index < goods.length; index++) {

        //     if (goods[index][0] === addedElement[0]) {
        //         include = false
        //         break
        //     }
        //     if (goods[index][0] !== addedElement[0]) {
        //         include = true
        //     }
        // }

        if (el) {
            goods.push([addedElement[0], addedElement[1], addedElement[2]])
        } else {
            alert('array has this element')
        }
        console.log(goods)
    } else if (input === 'READ') {
        goods.forEach((item) => {
            console.log(item[0], item[1], item[2])
        })
    } else if (input === 'SORT') {
        let direction = prompt('Write how do you want sort array: encrease or decrease')
        let sortedArray
        if (direction === 'encrease') {
            sortedArray = goods.toSorted((a, b) => a[2] - b[2])
        } else if (direction === 'decrease') {
            sortedArray = goods.toSorted((a, b) => b[2] - a[2])
        }
        sortedArray.forEach((item) => {
            console.log(item[0], item[1], item[2])
        })

    }

}

