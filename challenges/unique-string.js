function uniqueString(strings) {
  const orderedUniqueLetters = strings.map((s) => [...new Set(s)].sort());
  const duplicates = [...new Set(...orderedUniqueLetters)];

  return strings.find((string) => {
    return duplicates.indexOf(string[0] === -1);
  });
}

console.log(uniqueString(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']));
