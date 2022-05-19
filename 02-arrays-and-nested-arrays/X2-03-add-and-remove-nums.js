function addAndRemove(sequence) {
    let arr = []

    for (let n = 0; n < sequence.length; n++) {
        if (sequence[n] === 'add') arr.push(n + 1)
        else if (sequence[n] === 'remove') arr.pop()
    }
    if (arr.length) console.log(arr.join('\n'))
    else console.log('Empty')
}

// addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove'])