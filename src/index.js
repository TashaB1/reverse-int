module.exports = function reverse (n) {
  if (!isNaN(parseFloat(n)) && isFinite(n)){
    return ((n<0) ? n=-n+"" : n+="").split("").reverse().join("");
  }
}
