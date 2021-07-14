
function isAnagram(firstStr, secondStr) {
    if (!firstStr || !secondStr) return false;
    if (firstStr.length !== secondStr.length) return false;
  
    const lookup = {};
  
    for (first of firstStr) {
      lookup[first] ? (lookup[first] += 1) : (lookup[first] = 1);
    }
  
    for (second of secondStr) {
      if (!lookup[second]) return false;
      lookup[second] -= 1;
    }
}