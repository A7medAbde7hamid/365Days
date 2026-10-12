with open(r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days\phase-5.ts", "r", encoding="utf-8") as f:
    content = f.read()

import re
# Find all deliverableAr: lines ending with '' (double close quote)
for m in re.finditer(r"deliverableAr: '([^']*)'\'\", content):
    start = max(0, m.start()-30)
    end = min(len(content), m.end()+30)
    print(f"PROBLEM: ...{content[start:end]}...")

# Also find lines with comma inside the value that caused issues
for m in re.finditer(r"deliverableAr: '([^']*), [^']*[,]", content):
    start = max(0, m.start()-30)
    end = min(len(content), m.end()+30)
    print(f"COMMA INSIDE: ...{content[start:end]}...")