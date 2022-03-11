interface Mountain {
    name:string;
    height: number;
}

const mountains : Mountain[]= [
    {name: 'kilimanjaro', height: 19341},
    {name: 'Everest', height:29029},
    {name: 'Denali', height:20310}
]

function findNameofTallestMountain(mountains:Mountain[]): string {
    let currentTallestHeight: number = 0;
    let tallestMountainName: string = '';
    for( let i = 0; i < mountains.length; i++) {
        if( mountains[i].height > currentTallestHeight){
            currentTallestHeight = mountains[i].height
            tallestMountainName = mountains[i].name
        }
           
    }
    return tallestMountainName;
    

    
}


