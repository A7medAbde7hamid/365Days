import os
import re
import glob

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
for phase_file in sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts"))):
    with open(phase_file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Fix: if deliverableAr has '' '' (double close quote), replace with single close quote
    # Pattern: deliverableAr: 'value''  ->  deliverableAr: 'value'
    # We need to be careful: the pattern is deliverAr: '... followed by two single quotes and comma
    content = re.sub(r"deliverableAr: '([^']*)'\'\",", r"deliverableAr: '\1',", content)
    
    with open(phase_file, "w", encoding="utf-8") as f:
        f.write(content)

print("Fixed double-quote issues in all phase files")