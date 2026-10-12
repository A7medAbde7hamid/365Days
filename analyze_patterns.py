#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Look for deliverableAr lines with "constraints, and utility types"
    pattern = "deliverableAr: '"
    for m in re.finditer(pattern, content):
        # Get the rest of the line
        end = content.find(",", m.end())
        if end == -1:
            end = m.end() + 80
        snippet = content[m.end():end+20]
        # Check if it has "constraints, and utility types"
        if "constraints" in snippet:
            print(f"{os.path.basename(filepath)}: deliverableAr with 'constraints, and utility types'")
            # Show full deliverableAr value
            # Find the closing quote
            rest = content[m.end():]
            close = rest.find("'")
            if close != -1:
                full_value = rest[:close+1]
                print(f"  Value: {full_value}")