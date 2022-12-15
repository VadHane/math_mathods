const calculate = () => {
    const x =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const y =  [7711, 7828, 8382, 8480, 8725, 9141, 9170, 8977, 9042, 9218];

    const n = 10;
    let a = 0;
    let b = 0;
    let sumxy = 0;

    for (let i = 0; i < n; i++)
    {
        sumxy += x[i] * y[i];
    }

    const sumx = x.reduce((a, b) => a + b, 0);
    const sumy = y.reduce((a, b) => a + b, 0);

    let dobx = x.map(elem => {
        return elem * elem;
    });

    const sumDx = dobx.reduce((a, b) => a + b, 0);

    a = ((n * sumxy) - (sumx * sumy)) /
        ((n * sumDx) - Math.pow(sumx, 2));

    b = (sumy -  (a * sumx)) / n;

    changeTextOfElementById(a, 'result-field-a')
    changeTextOfElementById(b, 'result-field-b')
    changeTextOfElementById(`${a.toFixed(2)}x + ${b.toFixed(2)}`, 'result-field-y')

}

const changeTextOfElementById = (newValue, elementId) => {
    const selector = document.getElementById(elementId);

    selector.value = newValue;
}

calculate()