function currency(props: string){
  let value = props;
  
  value = value.replace(/\D/g, "")
  .replace(/(\d)(\d{2}$)/, "$1.$2")
  .replace(/(?=(\d{3})+(\D))\B/g, ",");

  return value;
}

function realCurrency(props: string){
  let value = props;
  
  value = value.replace(/\D/g, "")
  .replace(/(\d)(\d{2}$)/, "$1.$2")

  return value;
}

export {currency, realCurrency}