function formatDate(dateStr) {
  return dateStr.replace(
    /(\d{4,})-(?:0(\d{1})|(\d{1,2}))-(?:0(\d{1})|(\d{1,2}))/, '$1年$2$3月$4$5日'
    )
}
console.log(formatDate('2021-01-02')); // 2021年1月2日
console.log(formatDate('2021-10-02'));
console.log(formatDate('2021-01-20'));
console.log(formatDate('2021-10-20'));
console.log(formatDate('2021-1-02'));
console.log(formatDate('2021-1-20'));
console.log(formatDate('2021-01-2'));
console.log(formatDate('2021-10-2'));