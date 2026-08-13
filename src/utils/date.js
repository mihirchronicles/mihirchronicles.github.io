const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const formatDate = (isoDate) => {
  const [year, month, day] = isoDate.split("-").map(Number)
  if (!year || !month || !day) return isoDate
  return `${day} ${MONTHS[month - 1]} ${year}`
}

export const monthLabel = (yearMonth) => {
  const [year, month] = yearMonth.split("-")
  return `${MONTHS[Number(month) - 1].toUpperCase()} ${year}`
}
