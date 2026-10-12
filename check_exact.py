#!/usr/bin/env python3
import re, glob, os

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-6.ts")))

with open(files[0], "r", encoding="utf-8") as f:
    content = f.read()

# Find line 42 exactly
lines = content.split("\n")
for i, line in enumerate(lines):
    if "deliverableAr" in line and "generic functions" in line:
        print(f"Line {i+1}: {repr(line)}")
        # Show what comes after
        if "constraints" in line:
            idx = line.find("constraints")
            print(f"  After constraints: {repr(line[idx:idx+40])}")