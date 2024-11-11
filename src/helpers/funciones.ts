export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN', // Cambia 'USD' a la moneda que necesites, como 'EUR', 'MXN', etc.
        minimumFractionDigits: 2, // Mínimo de dos decimales
        maximumFractionDigits: 2, // Máximo de dos decimales
    }).format(value);
}
