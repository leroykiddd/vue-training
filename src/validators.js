export function isID(id) {
  if (!id) return true;
  return !isNaN(id);
}

export function isPhone(phone) {
  /*  (123) 456-7890
        (123)456-7890
        123-456-7890
        123.456.7890
        1234567890
        +31636363634
        075-63546725
                        */
  return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(phone);
}
