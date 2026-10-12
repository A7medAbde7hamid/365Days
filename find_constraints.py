#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check if deliverableAr contains "constraints" text
    if "constraints" in content:
        # Find the deliverableAr lines with constraints
        for m in re.finditer(r"deliverableAr: '", content):
            snippet = content[m.end():m.end()+80]
            close = snippet.find("'")
            if close != -1:
                value = snippet[:close+1]
                after = snippet[close+1:close+30]
                if "utility" in value.lower() or "constraints" in value.lower():
                    print(f"{os.path.basename(filepath)}: {value!r} followed by {after!r}")