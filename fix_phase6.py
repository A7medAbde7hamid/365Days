with open(r'C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days\phase-6.ts', 'r') as f:
    content = f.read()

# Fix the deliverableAr line with commas inside
old = "deliverableAr: 'TypeScript file with generic functions', constraints, and utility types.,"
new = "deliverableAr: 'TypeScript file with generic functions and constraints and utility types',"

content = content.replace(old, new)

with open(r'C:\Users\a7med\OneDrive\Documents\365 Days\src\features\curriculum\days\phase-6.ts', 'w') as f:
    f.write(content)
print('Fixed phase-6.ts')