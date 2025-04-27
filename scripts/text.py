import os

def capitalize_after_colon_single_line(line):
  if ': ' in line:
    before, after = line.split(': ', 1)
    if after and not after[0].isupper():
      after = after[0].upper() + after[1:]
      return f"{before}: {after}"
  return line

def get_changed_lines(original_lines):
  changed = []
  for i, orig in enumerate(original_lines):
    mod = capitalize_after_colon_single_line(orig)
    if orig != mod:
      changed.append((i, orig, mod))
  return changed

script_dir = os.path.dirname(os.path.abspath(__file__))
current_dir = os.path.normpath(os.path.join(script_dir, "..", "assets"))

for root, _, files in os.walk(current_dir):
  for file in files:
    if file.endswith(".md"):
      file_path = os.path.join(root, file)
      try:
        with open(file_path, "r", encoding="utf-8") as f:
          raw_lines = f.read().split('\n')
        
        changed_lines = get_changed_lines(raw_lines)
        
        if changed_lines:
          modified_lines = raw_lines.copy()
          any_accepted = False
          
          for line_index, orig, mod in changed_lines:
            print("---")
            print(f"{file_path} (Line {line_index + 1})")
            print(f"Before: {orig}")
            print(f"After:  {mod}")
            print("---")
            
            confirm = input("Press Enter to change, or 'no' to skip: ")
            
            if confirm.lower() != 'no':
              modified_lines[line_index] = mod
              any_accepted = True
              print(f"Accepted change for line {line_index + 1}")
            else:
              print(f"Skipped change for line {line_index + 1}")
          
          if any_accepted:
            with open(file_path, "w", encoding="utf-8") as f:
              f.write('\n'.join(modified_lines))
            print(f"Processed: {file_path}")
          else:
            print(f"No changes applied: {file_path}")
        else:
          print(f"No changes needed: {file_path}")
      except Exception as e:
        print(f"Error processing {file_path}: {e}")