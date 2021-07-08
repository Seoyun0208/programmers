process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = "";
    for (let i = 0; i < n[1]; i++) {
        for(let j = 0; j < n[0]; j++) {
            star += '*'
        }
        star += '\n'
    }

    console.log(star);
});