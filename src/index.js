module.exports = function check(str, bracketsConfig) {
  let bracketsConfigLength = bracketsConfig.length

  for (let i = 0; i < bracketsConfigLength;){
    let brackets = bracketsConfig[i].join('');
    if (str.includes(brackets)){
      str = str.replace(brackets, '');
      i = 0;
    } else {
      i++;
    }
  }
  if (result = str.length){
    return false;
  }else{
    return true;
  }
  return result;
}
