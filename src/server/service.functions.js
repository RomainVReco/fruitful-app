
export const dateFormatter = (date) => {
    const dateToFormat = new Date(date);
    return dateToFormat.toLocaleDateString('fr');
}