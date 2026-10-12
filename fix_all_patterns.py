#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

total_fixed = 0

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Pattern: deliverableAr: 'any text', constraints, and utility types.",
    # This matches: deliverableAr: 'something', constraints, and utility types.'
    # We want to combine into: deliverableAr: 'something, constraints, and utility types',
    
    # Find all occurrences of the broken pattern
    # The pattern is: deliverableAr: ' (any chars) ', constraints, and utility types.',
    # We need to capture the 'something' part (between the first ' and the ', before constraints)
    
    # Actually, let's match: deliverableAr: ' (stuff that doesn't contain ') ', constraints, and utility types.'
    pattern = r"deliverableAr: '([^']*), constraints, and utility types.'"
    
    matches = list(re.finditer(pattern, content))
    
    for m in reversed(matches):
        # m.group(1) is the text before the comma (e.g., "TypeScript file with generic functions")
        # We need to combine: m.group(1) + ", constraints, and utility types" inside the string
        original_text = m.group(1)
        new_value = original_text + ", constraints, and utility types"
        new_string = "deliverableAr: '" + new_value + "',"
        
        # Replace
        content = content[:m.start()] + new_string + content[m.end():]
        total_fixed += 1
        print(f"Fixed {os.path.basename(filepath)}: '{original_text}' -> combined string")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"\nTotal fixes applied: {total_fixed}")