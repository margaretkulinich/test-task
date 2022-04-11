export const getDollarsFromCents = (cents) =>  {
    if (typeof cents !== 'number') {
        console.error('Price is not a number!');
        
        return null;
    }

    return (cents / 100).toFixed(2);
}
