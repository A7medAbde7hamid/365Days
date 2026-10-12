#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

fixed = 0

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Pattern: deliverableAr: 'text with constraints, and utility types.', 
    # where the comma after the closing quote is the issue
    # We need to find deliverableAr values that have "constraints, and utility types" 
    # anywhere in the value, and ensure the whole thing is one quoted string
    
    # Find all deliverableAr: '...content...' lines
    # The issue is when there's a comma followed by "constraints, and utility types" 
    # outside the string
    
    # Match: deliverableAr: '...' , constraints, and utility types.'
    # This pattern has the comma outside the string
    pattern = r"deliverableAr: '([^']*), constraints, and utility types.'"
    
    matches = list(re.finditer(pattern, content))
    for m in reversed(matches):
        # Get the full original string
        original = m.group(0)
        # Extract just the value part (between the quotes)
        value = m.group(1) + ", constraints, and utility types"
        # Replace with the whole thing as one string
        new = "deliverableAr: '" + value + "',"
        content = content[:m.start()] + new + content[m.end():]
        fixed += 1
        print(f"Fixed {os.path.basename(filepath)}")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"\nTotal fixes applied: {fixed}")