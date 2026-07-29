
// ============================================
// EXTERNAL CONFIGURATION
// ============================================

const CONFIG = {
    // Google Sheets API - UPDATE THIS WITH YOUR DEPLOYMENT URL
        GOOGLE_SHEETS_API: "https://script.google.com/macros/s/AKfycbw_9C0T78FLlyXRomoT3pg7h-aQVTGEgmtWfP1f378OHZGZa01m_HCdvAt1eIQANnbt/exec",
    
    // Total balls/numbers available
    TOTAL_BALLS: 25,
    
    // Auto refresh interval (ms)
    REFRESH_INTERVAL: 5000,
    
    // Payment methods
    PAYMENT_METHODS: ['Telebirr', 'Bank Transfer', 'Cash', 'PayPal', 'M-Pesa', 'Crypto'],
    
    // Payment account info
    ACCOUNT_INFO: {
        'Telebirr': { account: 'Telebirr', number: '09XX-XXX-XXX', name: 'Lottery Wallet', amount: '100 ETB' },
        'Bank': { account: 'Commercial Bank', number: '1000-XXX-XXX', name: 'Lottery Account', amount: '100 ETB' },
        'Cash': { account: 'Cash Payment', number: 'In Person', name: 'Lottery Booth', amount: '100 ETB' },
        'PayPal': { account: 'PayPal', number: 'lottery@paypal.com', name: 'Lottery Fund', amount: '$5 USD' },
        'M-Pesa': { account: 'M-Pesa', number: '07XX-XXX-XXX', name: 'Lottery Wallet', amount: '100 ETB' },
        'Crypto': { account: 'USDT (TRC20)', number: 'TXxx...xxxx', name: 'Lottery Wallet', amount: '$5 USDT' }
    },
    
    // Colors
    COLORS: {
        primary: '#6bcb77',
        warning: '#ffd93d',
        danger: '#ff6b6b',
        info: '#4d96ff',
        dark: '#1a1a2e',
        grey: '#8892b0'
    },
    
    // Status labels
    STATUS: {
        available: 'Available',
        pending: 'Pending',
        confirmed: 'Confirmed',
        paid: 'Paid ✅'
    }
};