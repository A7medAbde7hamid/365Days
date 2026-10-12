#!/usr/bin/env python3
import re

filepath = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days\phase-5.ts"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Find deliverableAr with double closing quote pattern (the automated fix issue)
pattern1 = r"deliverableAr: '([^']*)'\'\"
matches1 = re.findall(pattern1, content)
if matches1:
    print(f"Double-close-quote issues: {len(matches1)}")
    for match in matches1[:5]:
        print(f"  Found: '{match}'")
else:
    print("No double-close-quote issues found")

# Find deliverableAr with commas inside the string value  
pattern2 = r"deliverableAr: '([^']*), [^']*'"
matches2 = re.findall(pattern2, content)
if matches2:
    print(f"\nComma-inside-value issues: {len(matches2)}")
    for match in matches2[:5]:
        print(f"  Found: '{match}'")
else:
    print("\nNo comma-inside-value issues found")

# Show a sample of all deliverableAr lines
print("\nSample deliverableAr lines:")
count = 0
for m in re.finditer(r"deliverableAr: '([^']*)'", content):
    if count < 10:
        start = max(0, m.start()-10)
        end = min(len(content), m.end()+30)
        print(f"  ...{content[start:end]}...")
    count += 1
if count == 0:
    print("  No deliverableAr lines found")
print(f"Total deliverableAr entries: {count}")