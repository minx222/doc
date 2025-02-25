const Lst = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
       
    }

    const update = (num) => {
        for (let i = result.length - 1; i >= 0; i--) {
            const cur = result[i];
            if (cur[cur.length - 1] < num) {
                cur.push(num);
            }
        }
    }
}