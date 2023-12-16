function firstWord(s) {
  // your code here
	if (!s || !s.includes(' ')) {
    // If the input string is empty or does not contain any space, return the entire string.
    return s;
  }
  // Find the index of the first space in the input string.
  const index = s.indexOf(' ');
  // Return the substring from the beginning of the string to the index of the first space.
  return s.substring(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
