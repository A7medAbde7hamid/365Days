#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

total_fixed = 0

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Match: deliverableAr: 'text''  (double close quote)
    # We'll search for the literal pattern manually
    
    # Find all occurrences of deliverableAr: and check if they end with ''
    lines = content.split("\n")
    new_lines = []
    
    for line in lines:
        if "deliverableAr:" in line:
            # Check if line has the double-close-quote pattern: .''
            # Pattern: deliverableAr: 'some text.''
            if "deliverableAr: '" in line:
                # Find the position after 'deliverableAr: '
                prefix = "deliverableAr: "
                idx = line.find(prefix) + len(prefix)
                rest = line[idx:]
                
                # Check if rest ends with "'. " or just "''" pattern
                # We want to find 'text.'' where there's a period before the double quote
                # Actually the pattern from errors is: deliverableAr: 'text.'',
                # so we need to find where the single quote closes, then there's another '
                
                # Let's just check if the line has .''  pattern after the value
                # Find the first single quote that closes the string
                # The format is: deliverableAr: 'value.'
                
                # Simple approach: if line contains ".'' " or ".'' ,
                if ".'' " in line or ".'' ," in line or line.rstrip().endswith(".''") or line.rstrip().endswith(".'',"):
                    # Fix it: remove the extra quote
                    # Replace .'' with just '
                    # But we need to be careful not to break other things
                    
                    # Find deliverableAr: ' and the closing '
                    # Then check if there's an extra quote after
                    
                    # Let's use regex on this single line
                    line_pattern = r"deliverableAr: '([^']*)'\'\"
                    lm = re.search(line_pattern, line)
                    if lm:
                        value = lm.group(1)
                        # Replace the whole thing with single close quote + comma
                        new_line = line[:lm.start()] + f"deliverableAr: '{value}'," + line[lm.end():]
                        # Actually lm.end() includes the double quote, let's be more careful
                        # The match is: deliverableAr: 'value''
                        # We want: deliverableAr: 'value',
                        new_line = line[:lm.start()] + f"deliverableAr: '{value}'," + line[lm.end()-1:]
                        # Wait, lm.end() points after the last character matched
                        # The pattern r"deliverableAr: '([^']*)'\"" matches: deliverableAr: 'value''
                        # lm.start() is position of 'd' in deliverableAr
                        # lm.end() is position after the second ' in .''
                        # So line[lm.end()] is whatever comes after .''
                        
                        # Let me just rebuild:
                        # Before match: everything up to lm.start()
                        # Match: deliverableAr: 'value''
                        # After match: line[lm.end():]
                        # New: deliverableAr: 'value', + line[lm.end():] but we need to handle the comma
                        
                        # Actually simpler: just replace the specific substring
                        old = lm.group(0)  # deliverableAr: 'value''
                        new = f"deliverableAr: '{value}',"
                        new_line = line.replace(old, new, 1)
                        
                        line = new_line
                        total_fixed += 1
                        print(f"Fixed {os.path.basename(filepath)}")
        new_lines.append(line)
    
    content = "\n".join(new_lines)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"\nTotal fixes applied: {total_fixed}")