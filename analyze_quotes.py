import glob, os, re

curriculum_dir = r"C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days"
files = sorted(glob.glob(os.path.join(curriculum_dir, "phase-*.ts")))

for f in files:
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    
    # Count deliverableAr occurrences
    count = content.count("deliverableAr:")
    # Find all deliverableAr values (simple ones without internal commas causing issues)
    simple = re.findall(r"deliverableAr: '([^']*)'", content)
    
    basename = os.path.basename(f)
    if len(simple) == count:
        print(f"{basename}: OK ({count} entries, all simple)")
    else:
        # Show a few problem lines
        problems = re.findall(r"deliverableAr: '([^']*)'[',]", content)
        print(f"{basename}: ISSUES ({count} entries, {len(problems)} problematic)")
        for p in problems[:3]:
            print(f"  -> {p}")