function isAnagram(s, t) {
  // length same না হলে anagram হতে পারে না
  if (s.length !== t.length) {
    return false;
  }

  //  a-z এর জন্য 26টা ঘর
  const count = new Array(26).fill(0);

  // s-এর character গুলো count করি
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - "a".charCodeAt(0);
    count[index]++;
  }

  // t-এর character গুলো বাদ দিই
  for (let i = 0; i < t.length; i++) {
    const index = t.charCodeAt(i) - "a".charCodeAt(0);
    count[index]--;
  }

  //   সব balance 0 হতে হবে
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }

  return true;
}

const s = "jar";
const t = "jam";

const result = isAnagram(s, t);

console.log(result);
