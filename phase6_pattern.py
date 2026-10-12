#!/usr/bin/env python3
import re

with open(r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days\phase-6.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Find deliverableAr lines
for m in re.finditer(r"deliverableAr: '", content):
    snippet = content[m.end():m.end()+70]
    close = snippet.find("'")
    if close != -1:
        value = snippet[:close+1]
        after = snippet[close+1:close+30]
        print(f"Value: {value!r}")
        print(f"After: {after!r}")
        print("---")