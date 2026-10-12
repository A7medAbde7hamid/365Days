#!/usr/bin/env python3
import glob, os, re

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

for f in files:
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    
    day_nums = re.findall(r"dayNumber: (\d+)", content)
    basename = os.path.basename(f)
    first = day_nums[0] if day_nums else "?"
    last = day_nums[-1] if day_nums else "?"
    count = len(day_nums)
    print(f"{basename}: days {first}-{last} ({count} days)")