export default function monthlyResumeDateFormat(date) {
  return date.toLocaleString('fr', { month: 'long', year: 'numeric' });
}
