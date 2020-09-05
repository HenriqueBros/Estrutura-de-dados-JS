// dia 1
let averageTemp = [];

averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

// dia 2

averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;

// FUNCAO de impressao

function printMatrix(averageTemp) {
    for(let i = 0; i < averageTemp.length; i++) {
        for(let j = 0; j < averageTemp[i].length; j++) {
            console.log(averageTemp[i][j]);
        }
    }
}

printMatrix(averageTemp);