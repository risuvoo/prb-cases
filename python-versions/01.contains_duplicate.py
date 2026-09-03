nums = [1,2,3,1]

seen = set()
has_duplicate= False

for num in nums:
    if num in seen:
        has_duplicate = True
        break
    seen.add(num)

print("Has duplicate?", has_duplicate)
print(seen)