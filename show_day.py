#!/usr/bin/env python3
import glob, os, re

files = glob.glob(r'C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days\phase-8.ts')[0]
with open(files, 'r', encoding='utf-8') as f:
    content = f.read()

# Find day 211 entry
idx = content.find('dayNumber: 211')
if idx >= 0:
    next_idx = content.find('dayNumber: 212', idx+1)
    if next_idx >= 0:
        entry = content[idx:next_idx]
        # Write to a temp file to avoid encoding issues in stdout
        with open('/tmp/day211.txt', 'w', encoding='utf-8') as tf:
            tf.write(entry)
        print('Written day 211 to /tmp/day211.txt')
        
# Also show day 228
idx = content.find('dayNumber: 228')
# Find the start of this entry (previous dayNumber 227)
prev_idx = content.rfind('dayNumber: 227', 0, idx)
if prev_idx >= 0:
    entry = content[prev_idx:idx+200]  # Include day 228 line
    with open('/tmp/day228.txt', 'w', encoding='utf-8') as tf:
        tf.write(entry)
    print('Written day 228 to /tmp/day228.txt')