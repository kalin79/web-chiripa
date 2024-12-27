export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN', // Cambia 'USD' a la moneda que necesites, como 'EUR', 'MXN', etc.
        minimumFractionDigits: 2, // Mínimo de dos decimales
        maximumFractionDigits: 2, // Máximo de dos decimales
    }).format(value);
}

export function formatDate(inputDate: string | null | undefined): string {
    if (!inputDate) {
        inputDate = "2024-12-07"; // Fecha predeterminada
    }
    // Crear un objeto Date a partir de la fecha de entrada
    const [ano, mes, dia] = inputDate.split('-').map(Number);
    const date = new Date(ano, mes - 1, dia);

    // Obtener día, mes y año
    const day = date.getDate(); // Día del mes
    const year = date.getFullYear().toString().slice(-2); // Últimos dos dígitos del año

    // Lista de meses abreviados
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"];
    const month = months[date.getMonth()]; // Obtener el mes en formato abreviado

    // Formatear la fecha como DD-MMM-YY
    return `${day}-${month}-${year}`;
}
