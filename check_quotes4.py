#!/usr/bin/env python3
import re

filepath = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days\phase-5.ts"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Find deliverableAr with commas inside the string value  
# Pattern: deliverableAr: 'value, with, commas' ,
pattern = "deliverableAr: '"
# Find all positions
for m in re.finditer(pattern + "([^']*)'" , content):
    # Check if there's a comma after the closing quote
    after = content[m.end():m.end()+2]
    if after == "',":
        print("OK: deliverableAr: 'value',")
    elif after == "', ":
        print("OK: deliverableAr: 'value', with trailing space")
    else:
        print(f"Position {m.start()}: after closing quote: {repr(after)} - full context: {repr(content[m.start():m.end()+40])}")