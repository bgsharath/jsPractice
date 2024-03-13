const array1 = ['BR214','BR236']
const array2 = ['206-CY24-1','214-St2','236','254-CY24-1']

function similar(a,b) {
    var equivalency = 0;
    var minLength = (a.length > b.length) ? b.length : a.length;    
    var maxLength = (a.length < b.length) ? b.length : a.length;    
    for(var i = 0; i < minLength; i++) {
        if(a[i] == b[i]) {
            equivalency++;
        }
    }
    var weight = equivalency / maxLength;
    return (weight * 100) + "%";
}

console.log(similar('214','214-St2'))

// op-> ['214-St2','236']