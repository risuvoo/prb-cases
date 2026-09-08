def is_anagram(s,t):
    if len(s) != len(t):
        return False
    
    count = [0] * 26

    for ch in s:
        index = ord(ch) - ord('a')
        count[index] += 1

    for ch in t:
        index = ord(ch) - ord('a')
        count[index] -= 1

    for value in count:
        if value != 0:
            return False

    return True


# test
s = "anagram"
t = "nagaram"

print(is_anagram(s,t))