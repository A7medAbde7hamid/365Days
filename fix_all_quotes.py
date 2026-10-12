#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

fixed_total = 0

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Pattern: deliverableAr: 'text', constraints, and more text'
    # This means the string ends at the first ', then 'constraints, and more' is outside
    # We need to: find '...functions', constraints, and utility types.'
    # and replace with: '...functions, constraints, and utility types',
    
    # Match: deliverableAr: 'something', constraints, and more things.'
    old_pattern = r"deliverableAr: '([^']*), constraints, and utility types.'"
    
    # Check if this pattern exists
    match = re.search(old_pattern, content)
    if match:
        # Replace with commas inside the string
        new_value = match.group(1) + ", constraints, and utility types"
        new_string = "deliverableAr: '" + new_value + "',"
        content = content[:match.start()] + new_string + content[match.end():]
        fixed_total += 1
        print(f"Fixed {os.path.basename(filepath)}: comma-inside-value issue")
    
    # Also check for other comma-inside patterns
    # Pattern: deliverableAr: 'text with, commas', 
    # where the comma after ' is wrong
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"\nTotal files with fixes: {fixed_total}")