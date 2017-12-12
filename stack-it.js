function stackIt(packs) {
    if (packs === 0) {
        return true
    }

    //Start with total packs and work backwards by subtracting i++
    let i = 1
    while (packs > 0) {
        packs -= i
        i++
        //If packs reaches 0, it means there's a perfect amount of packs
        if (packs === 0) {
            return true
        }
    }

    return false
}
