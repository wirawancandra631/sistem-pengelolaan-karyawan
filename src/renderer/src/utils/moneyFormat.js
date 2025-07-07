const RP = (money) => {
  /** render money format in rupiah  */
  const render = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(money);
  return render;
};

export default RP;
