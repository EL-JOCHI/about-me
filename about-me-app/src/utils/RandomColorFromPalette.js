export const RandomColorFromPalette = () => {
    const colors = [
        '#dde8b9',
        '#e8d2ae',
        '#cb8589',
        '#F7F052',
        '#38726C',
        '#B3CDD1',
        '#3F6C51',
        '#735CDD',
        '#5BC3EB',
        '#62929E',
        '#C6C5B9',
        '#546A7B',
        '#EDF4ED',
        '#ABD1B5',
        '#6883BA',
        '#B4654A',
        '#F06449',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}