/**
 * Following cases could occur:
 * 1. Cat wants to watch more TV than he is allowed to. If the total duration of his desired shows is strictly
 * greater than the allowed time limit, you should return a message "You are not allowed to watch so much TV, name",
 * where name is the name of the cat.
 * 2. Cat wants some shows that overlap in time. There should be at least one minute between the end of the first
 * show and the start of the second one. If there are some shows that overlap, you should return the following message
 * "show1 and show2 overlap, pick one, name", where show1 and show2 are the titles of the overlapping shows. If there
 * occurs more than one overlapping, you should return the earliest one.
 * 3. If there are no problems with time limit and overlapping, return the following message: "You may watch your shows, name"
 */

function catflix(shows, limit, name) {
    const allShows = shows.map((show) => {
        return {
            name: show[0],
            start: getShowtimeInMinutes(show[1]),
            end: getShowtimeInMinutes(show[2])
        }
    })

    const totalShowsDuration = allShows.reduce((showDuration, show) => {
        return showDuration + (show.end - show.start)
    }, 0)

    if (totalShowsDuration > getShowtimeInMinutes(limit)) {
        return `You are not allowed to watch so much TV, ${name}`
    }

    //Sort by start time of shows so we can compare each of the shows sequentially for conflicts
    allShows.sort((a, b) => a.start - b.start)

    for (let i = 0; i < allShows.length-1; i++) {
        //If the first show's end is greater than second show's start, there's a conflict
        if (allShows[i].end >= allShows[i+1].start) {
            return `${allShows[i].name} and ${allShows[i+1].name} overlap, pick one, ${name}`
        }
    }

    return `You may watch your shows, ${name}`
}

function getShowtimeInMinutes(timeString) {
    let [hour, minute] = timeString.split(':').map(s => parseInt(s))
    return (hour * 60) + minute
}
