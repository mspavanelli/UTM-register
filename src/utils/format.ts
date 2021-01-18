const formatCurrency = () =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format

export { formatCurrency }
