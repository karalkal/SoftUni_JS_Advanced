// Calculate the sum of the length of the strings 
// and the average length of the strings rounded down to the nearest integer.

function strLen(s1, s2, s3) {
    let totalLen = s1.length + s2.length + s3.length
    console.log(totalLen + '\n' + Math.round(totalLen/3));
}

strLen('chocolate', 'ice cream', 'cake')