#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

total_fixed = 0

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Pattern: deliverableAr: 'text part', rest of text.',
    # This means the string ends at the first ', then 'rest of text.' is TypeScript code
    # We need to combine: deliverableAr: 'text part, rest of text',
    
    # Match: deliverableAr: '([^']*), [^']*'[,\s]
    # This matches: deliverableAr: 'something', more text.'
    
    # Actually, let's match the specific pattern from errors:
    # deliverableAr: 'VALUE', rest TEXT.',
    # where VALUE ends before a comma, and rest TEXT starts after
    
    # General pattern: find deliverableAr: ' and then find where the comma closes the string
    # and then there's more text after
    
    # Let's use a different approach: find all deliverableAr: '...' lines
    # and check if there's a comma after the closing quote before the next content
    
    # Actually, the simplest approach: match deliverableAr: ' ... ' ,  pattern
    # where there's a comma inside the value area
    
    # Let me just replace the pattern: deliverableAr: '([^']*), [^']*[.,]'
    # with: deliverableAr: '...all text...',
    
    # Better: just find lines with deliverableAr and fix the comma placement
    # by replacing: 'text1', text2.'  ->  'text1, text2',
    
    # Let me match: deliverableAr: '([^']*), [^']*[.,]'
    # This captures the first part in group 1, and matches the rest
    
    # Actually, let me just do a comprehensive regex replace
    # Pattern: deliverableAr: '([^']*), [^'']*'[.,]'
    # Replace with: deliverableAr: '\1, [rest]', 
    
    # Hmm, this is getting complex. Let me try a simpler approach:
    # Just replace the specific broken patterns I've seen
    
    # Let me just find and replace: any occurrence of deliverableAr: ' ... ' , 
    # where after the closing quote there's more text before the next quote
    
    # Actually, the most reliable approach: just replace the pattern
    # deliverableAr: '([^']*), [^'']*' with deliverableAr: '\1, [the rest as part of string]'
    
    # Let me just try to match and replace the common pattern:
    # deliverableAr: ' (some text) ', (more text).'
    
    # I'll use a different strategy: just replace the problematic pattern
    # where there's a comma inside the deliverableAr value area
    
    # Pattern from the errors: deliverableAr: '...comma..., more text.'
    # Replace with: deliverableAr: '...comma, more text.',
    
    # Let me just do multiple specific replacements based on what I've seen
    # Or I can use a regex that matches: deliverableAr: ' (any chars) ', (any chars).'
    # and rebuild it as deliverableAr: ' (all chars together)',
    
    # Actually the simplest: use regex to match the whole deliverableAr string value
    # and if there's a comma before the closing quote that's followed by more text,
    # move that comma inside.
    
    # Let me just try: find all deliverableAr: '...' and check if the value contains 
    # a pattern like "text', more text" where the ' ends the string prematurely
    
    # OK, let me just do a brute-force approach: 
    # Replace every occurrence of: deliverableAr: '([^']*), [^'']*' 
    # with: deliverableAr: '\1, [combined]'
    
    # Actually, I just realized: the pattern is consistently:
    # deliverableAr: 'PART1', PART2.'
    # where PART1 and PART2 are both part of the intended string value
    # We want: deliverableAr: 'PART1, PART2',
    
    # So the regex: r"deliverableAr: '([^']*), [^'']*'[.,]?"
    # captures group 1 = PART1
    # and we replace with: r"deliverableAr: '\1, [the rest]', but we need the rest too
    
    # Actually we can just replace the whole thing. Let me match:
    # deliverableAr: ' (anything up to first comma) ', (rest of text).'
    # and replace with: deliverableAr: ' (first part) , (rest of part) ',
    
    # I'll use a simpler approach: just replace the specific broken patterns
    # by looking for: ' (text with no closing quote issue), more text .'
    
    # Let me just do it step by step - find all deliverableAr lines and fix them
    
    lines = content.split("\n")
    new_lines = []
    
    for line in lines:
        if "deliverableAr:" in line:
            # Check if this line has the broken pattern: comma after closing quote
            # Pattern: deliverableAr: 'some text', more text.'
            if re.search(r"deliverableAr: '.*', '.*'", line) or re.search(r"deliverableAr: '.*', [^']*", line):
                # This line has the broken pattern
                # Fix it by combining into one string
                # Match: deliverableAr: ' (part1) ', (part2).'
                # We'll rebuild: deliverableAr: 'part1, part2',
                
                # Find the first ' after deliverableAr: 
                prefix = "deliverableAr: "
                idx = line.find(prefix) + len(prefix)
                rest = line[idx:]
                
                # Find the first ' that closes the string
                first_quote_close = rest.find("'")
                if first_quote_close != -1:
                    part1 = rest[:first_quote_close]  # text before the first closing quote
                    part2_rest = rest[first_quote_close+1:]  # text after
                    
                    # Now find the closing quote for the second time
                    # The format seems to be: 'part1', part2.'
                    # So after part1 and the first closing quote, there's a comma, then part2, then another quote
                    
                    # Find the next ' after the comma
                    comma_idx = part2_rest.find(",")
                    if comma_idx != -1:
                        after_comma = part2_rest[comma_idx+1:]
                        second_quote_close = after_comma.find("'")
                        if second_quote_close != -1:
                            part2 = after_comma[:second_quote_close+1]  # include the closing quote
                            
                            # Now rebuild: deliverableAr: 'part1, part2_without_closing_quote',
                            part2_without_q = part2[:-1]  # remove the closing quote
                            
                            new_value = part1 + ", " + part2_without_q
                            new_line = "deliverableAr: '" + new_value + "'," + line[idx+len(part1)+len(part2):]
                            
                            # Actually this is getting too complex. Let me try a simpler regex approach.
                            new_lines.append(line)  # keep original for now
                            continue
            
            new_lines.append(line)
        else:
            new_lines.append(line)
    
    content = "\n".join(new_lines)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"Done processing {len(files)} files")