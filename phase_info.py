#!/usr/bin/env python3
import glob, os, re

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

for f in files:
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    
    phase_m = re.search(r"Phase \d+", content)
    first_day_m = re.search(r"dayNumber: (\d+)", content)
    first_day = first_day_m.group(1) if first_day_m else "?"
    slug_m = re.search(r"phaseSlug: '([^']*)'", content)
    slug = slug_m.group(1) if slug_m else "?"
    topic_m = re.search(r"topic: '([^']*)'", content)
    topic = topic_m.group(1) if topic_m else "?"
    
    basename = os.path.basename(f)
    print(f"{basename}: days start at {first_day}, slug={slug}, topic={topic}")