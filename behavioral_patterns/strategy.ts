// Has 3 type golf clubs. It is used in a number of different situations
// fairway wood
// pitching wedge
// putter

interface GolfClubs {
    name: string,
    type: string,
    execute(): void,
}

class FairwayWood implements GolfClubs {
    name: string;
    type = 'fairway_wood'
    constructor(name: string) {
        this.name = name
    }
    execute(): void {
        // do something
    }
}

class PitchingWedge implements GolfClubs {
    name: string;
    type = 'pitching_wedge'
    constructor(name: string) {
        this.name = name
    }
    execute(): void {
        // do something
    }
}

class Putter implements GolfClubs {
    name: string;
    type = 'putter'
    constructor(name: string) {
        this.name = name
    }
    execute(): void {
        // do something
    }
}

type Distance = "long" | "short" | "shortest"

class Domain {
    mapper = {
        long: FairwayWood,
        short: PitchingWedge,
        shortest: Putter,
    }
    getGolfClubs(distance: Distance, clubName: string): GolfClubs {
        const clubsObj = this.mapper[distance]
        return new clubsObj(clubName)
    }
}

const domain = new Domain()
const club01 = domain.getGolfClubs('long', 'club01')
// console.log(club01)