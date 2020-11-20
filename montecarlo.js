let n = 7 //number of alternative moves
let moveset1 = new Array(n)
let moveset2 = new Array(n)


//needs to generate array of ints through result.
let interator = (arr) =>
{
    for (var x = 0; x < arr.length; x++)
    {
        arr[x] = x+1
    }
    return arr
}

moveset1 = interator(moveset1)
moveset2 = interator(moveset2)

let squarer = (arr) => {
  zs = []
  for (var x = 0; x < arr.length; x++)  ///squares array of ints 1 through result
  {
    zs[x] = (arr[x])**2
  }
  return zs
}

moveset1 = squarer(moveset1)
//console.log(moveset1)

let inverter = (arr) => {
  zi = []
  for (var x = 0; x < arr.length; x++)   /// same as above but inverted
  {
      zi[x] = (arr[x])**2*(-1)
  }
  return zi
}

moveset2 = inverter(moveset2)
//console.log(moveset2)

let cObjGen = () => {
    //nested for looop
    //takes in both movesets
    //adds summations not equal to zero to object with stringified summation as key
    let values = []

    for (var x = 0; x < moveset1.length; x++){
        for (var y = 0; y < moveset2.length; y++) {
            var sum = moveset1[x]+moveset2[y]
            if (sum == 0){
                continue
            }
            else if (!values.includes(sum)){
                values.push(sum)
            }
            else{
                console.log(moveset1[x], moveset2[y])
                console.log(sum)
                return false;
            }
        }
    }
    console.log(values)
    return values

}
console.log(cObjGen())

/*
let populator = (moveset, arr) => {
  for (var x = 0; x < moveset.length; x++)
  {
    moveset[n] = arr[n]
  }
  return moveset
}
let playermoves = populator(moveset1, squarer(moveset1))
console.log(playermoves) */