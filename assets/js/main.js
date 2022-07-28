/* Function to get an output with my age */
function age(yearBorn) {
    return 2022 - yearBorn
}

console.log(age(1987))



/* Function to compare two ages */
function ageDiff(age1, age2) {
    let alterDiff

    if (age1 >= age2) {
        alterDiff = age1 - age2
    }
    else if (age1 < age2) {
        alterDiff = age2 - age1
    }
    return alterDiff
}

console.log(ageDiff(35, 20))
/* 15 */

console.log(ageDiff(20, 35))
/* 15 */

console.log(ageDiff(20, 20))
/* 0 */

console.log(ageDiff(105, 15))
/* 90 */

