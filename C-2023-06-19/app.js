// Find needle in haystack

// Example: Input
//     ['hay', 'junk', 'moreJunk', 'needle', 'randomJunk', 'randomNeedle']

//     Output:
//     'found the needle at position 20'

function findNeedle(haystack) {
    const id = haystack.indexOf('needle');
    return `found the needle at position ${id}`;
}

console.log(findNeedle(haystack));