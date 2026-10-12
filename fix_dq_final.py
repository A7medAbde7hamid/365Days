#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

total_fixed = 0

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Pattern: deliverableAr: 'text.''  where there's a double close quote
    # We need to match: deliverableAr: 'some text.'' 
    # and replace with: deliverableAr: 'some text',
    
    # Use regex: find deliverableAr: 'capture text' ''  
    # The pattern is: deliverableAr: ' (text without single quotes) ' '
    # Actually the error shows: deliverableAr: 'text.'' 
    # where there's a period inside the value, then two single quotes
    
    # Let's match: deliverAr: ' (any chars that are not single quote) ' ''
    # But we need to be careful: the value might contain periods, commas, etc.
    
    # Simple approach: look for the specific pattern from errors
    # deliverableAr: 'TEXT.''  where TEXT is the value
    
    # We'll match: deliverableAr: '([^']*)'\'\s*,?
    # This captures the text between the first ' and the last ' before the second ''
    
    # Actually, let's just replace: .''  with , at the end of deliverableAr lines
    # Pattern: deliverableAr: '([^']*)''
    
    # Replace: deliverableAr: 'value''  ->  deliverableAr: 'value',
    
    # Let's use a different approach: find all lines with deliverableAr and fix them
    lines = content.split("\n")
    new_lines = []
    
    for line in lines:
        if "deliverableAr:" in line:
            # Check if this line has the double-close-quote issue
            # The pattern is: deliverableAr: 'value.''  (note: no comma after the '', or comma is after)
            
            # Check for: .'' followed by optional comma and/or newline
            if re.search(r"deliverableAr: '.*'\'\s*", line):
                # Fix: replace .'' with just ' followed by comma
                # Find deliverableAr: ' and the value and the .''
                # We'll use regex substitution
                fixed_line = re.sub(
                    r"deliverableAr: '([^']*)'\'\s*,?",
                    r"deliverableAr: '\1',",
                    line
                )
                if fixed_line != line:
                    new_lines.append(fixed_line)
                    total_fixed += 1
                    print(f"  Fixed {os.path.basename(filepath)}: corrected double-close-quote")
                    continue
            # Also check for: .'' without trailing comma but with newline
            if re.search(r"deliverableAr: '.*'\'\s*$", line) or re.search(r"deliverableAr: '.*'\'\s*,?$", line):
                fixed_line = re.sub(
                    r"deliverableAr: '([^']*)'\'\s*,?$",
                    r"deliverableAr: '\1',",
                    line
                )
                if fixed_line != line:
                    new_lines.append(fixed_line)
                    total_fixed += 1
                    print(f"  Fixed {os.path.basename(filepath)}: corrected double-close-quote at end")
                    continue
        
        new_lines.append(line)
    
    content = "\n".join(new_lines)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"\nTotal fixes applied: {total_fixed}")