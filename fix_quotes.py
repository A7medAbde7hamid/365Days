import os
import re

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
phase_files = sorted([f for f in os.listdir(curriculum_dir) if f.endswith('.ts')])

fixed = 0
for phase_file in phase_files:
    filepath = os.path.join(curriculum_dir, phase_file)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        # Match deliverableAr: VALUE, where VALUE doesn't start with a quote
        match = re.match(r"^\s*deliverableAr:\s*(.+?),", line)
        if match:
            value = match.group(1)
            stripped = value.strip()
            # Check if value already starts with a quote (single or double)
            has_leading_quote = stripped.startswith("'") or stripped.startswith('"')
            if not has_leading_quote:
                # Add the opening single quote
                new_line = re.sub(
                    r"^\s*deliverableAr:\s*" + re.escape(value) + r",",
                    f"deliverableAr: '{value}',",
                    line,
                )
                if new_line != line:
                    lines[i] = new_line
                    fixed += 1
        new_lines.append(lines[i])
        i += 1
    
    content = "\n".join(new_lines)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"Fixed {fixed} deliverableAr quote issues across {len(phase_files)} phase files")