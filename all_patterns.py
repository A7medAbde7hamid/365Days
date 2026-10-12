#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Find all deliverableAr lines
    pattern = r"deliverableAr: '"
    for m in re.finditer(pattern, content):
        # Get the rest up to 60 chars
        snippet = content[m.end():m.end()+60]
        # Check if it has "constraints"
        if "constraints" in snippet:
            # Find the closing quote
            rest = snippet
            close = rest.find("'")
            if close != -1:
                value_part = rest[:close+1]  # includes the closing quote
                after = rest[close+1:close+30]
                print(f"{os.path.basename(filepath)}: deliverableAr value: {value_part!r} followed by: {after!r}")