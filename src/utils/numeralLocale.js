// Modules
import numeral from 'numeral';

numeral.register('locale', 'pt-BR', {
    delimiters: {
        thousands: '.',
        decimal: ',',
    },
    abbreviations: {
        thousand: 'mil',
        million: 'milhões',
        billion: 'b',
        trillion: 't',
    },
    ordinal: () => 'º',
    currency: {
        symbol: 'R$',
    },
});

numeral.register('locale', 'en-US', {
    delimiters: {
        thousands: ',',
        decimal: '.',
    },
    abbreviations: {
        thousand: 'thousand',
        million: 'million',
        billion: 'b',
        trillion: 't',
    },
    ordinal: () => 'º',
    currency: {
        symbol: 'R$',
    },
});

export default numeral;
