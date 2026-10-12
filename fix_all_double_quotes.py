#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

total_fixed = 0

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Pattern: deliverableAr: 'text.''  (double close quote)
    # Match: deliverableAr: ' (any chars) '']
    # Actually the pattern from errors is: deliverableAr: 'text.''  where there's a period and then two quotes
    # But looking at the actual content, it's: deliverableAr: 'text.'',
    
    # More general pattern: find deliverableAr lines ending with .'', 
    # where the content before the quotes doesn't have a comma after the closing quote
    
    # Match deliverableAr: '...''. This means the string content ends, then . '' 
    # Actually looking at the errors, the pattern is: deliverableAr: 'text.'',
    # where text doesn't end with a period necessarily, but the '' is the issue
    
    # Let's match: deliverableAr: '([^']*)'\'\s*,?
    # This matches: deliverableAr: 'text'' [optional comma]
    
    pattern = r"deliverableAr: '([^']*)'\'\"
    
    matches = list(re.finditer(pattern, content))
    
    for m in reversed(matches):
        # Get the full match text
        original = m.group(0)
        # The value inside the first pair of quotes
        value = m.group(1)
        # Replace with: deliverableAr: 'value',
        new = f"deliverableAr: '{value}',"
        
        # Replace in content
        content = content[:m.start()] + new + content[m.end():]
        total_fixed += 1
        print(f"Fixed {os.path.basename(filepath)}: '{value}' -> single close quote")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"\nTotal fixes applied: {total_fixed}")