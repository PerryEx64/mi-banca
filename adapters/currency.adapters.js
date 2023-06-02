export function currencyFormatter(value) {
  const formatter = new Intl.NumberFormat('en-GT', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency: 'GTM'
  })
  return formatter.format(value)
}
