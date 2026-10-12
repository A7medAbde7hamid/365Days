#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

fixed = 0

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Pattern: deliverableAr: 'text', constraints, and utility types.',
    # Replace with: deliverableAr: 'text, constraints, and utility types',
    old = "deliverableAr: 'TypeScript file with generic functions', constraints, and utility types.',"
    
    # Check if this exact pattern exists
    if old in content:
        new = "deliverableAr: 'TypeScript file with generic functions, constraints, and utility types',"
        content = content.replace(old, new)
        fixed += 1
        print(f"Fixed {os.path.basename(filepath)}: phase-6.ts line 42")
    else:
        print(f"{os.path.basename(filepath)}: pattern not found")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"\nTotal fixes: {fixed}")