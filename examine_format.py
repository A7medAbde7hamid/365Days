#!/usr/bin/env python3
import glob, os, re

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

# Show first few days of each phase to understand format
for f in files[:4]:  # Just first 4 phases
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    
    # Find day entries - look for the pattern of day objects
    # Each day seems to have: dayEn, dayAr, exerciseEn, exerciseAr, deliverableEn, deliverableAr
    basename = os.path.basename(f)
    # Get line numbers of deliverableAr
    for m in re.finditer(r"deliverableAr: '", content):
        line_num = content[:m.start()].count("\n") + 1
        if line_num <= 10:
            # Show the line
            lines = content.split("\n")
            print(f"\n{basename} line {line_num}: {lines[line_num-1][:80]}...")